import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchGraphQL(text, variables) {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  });
  return response.json();
}

async function fetchRelay(params, variables) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return fetchGraphQL(params.text, variables);
}

const environment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
});

export default environment;
