const { Client } = require("pg");

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'phenomena',
    password: '3Ds4life',
    port: 5432
});

client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
  insert: (query) => client.query(query),
};