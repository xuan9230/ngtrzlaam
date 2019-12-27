const AWS = require("aws-sdk");

exports.handler = async event => {
  const requestBody = JSON.parse(event.body);
  const { messageBody } = requestBody;

  if (!messageBody)
    return {
      statusCode: 400,
      body: JSON.stringify("Must contain messageBody")
    };

  try {
    return {
      statusCode: 200,
      body: JSON.stringify("Response from lambda")
    };
  } catch (err) {
    console.log("err", err);
  }
};
