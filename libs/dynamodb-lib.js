import AWS from 'aws-sdk';

const user = new AWS.DynamoDB.DocumentClient();

export default {
    query: (params) => user.query(params).promise(),
};