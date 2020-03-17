import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables) {
  return fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  })
    .then(response => {
      console.log(111, response);
      return response.json();
    })
    .catch(err => console.log(err));
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
