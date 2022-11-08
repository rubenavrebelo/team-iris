const { Client } = require('pg');

const client = new Client({
  user: 'TOBEFILLED',
  host: 'TOBEFILLED',
  database: 'TOBEFILLED',
  password: 'TOBEFILLED',
  port: 'TOBEFILLED',
});

client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
  insert: (query) => client.query(query),
};
