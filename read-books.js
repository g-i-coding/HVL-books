const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const TABLE_NAME = 'YOUR_TABLE_NAME_HERE'; // Insert your table name here

const findAllBooks = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const Books = await db.scan(params).promise();
  return Books;
};

exports.handler = async () => {
  const Books = await findAllBooks();
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
    body: JSON.stringify(Books),
  };
  return response;
};
