const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  const requestBody = JSON.parse(event.body);
  const { messageBody } = requestBody;

  if (!messageBody)
    return {
      statusCode: 400,
      body: JSON.stringify("Must contain messageBody")
    };

  try {
    const res = await ddb
      .put({
        TableName: "Messages",
        Item: {
          MessageId: "123",
          body: messageBody
        }
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify("Created message")
    };
  } catch (err) {
    console.log("err", err);
  }
};
