const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'db.gtnwpgrevinkijiiwadt.supabase.co',
  database: 'postgres',
  password: '@Sf@ghqNM@N!U6!',
  port: 5432,
});

client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
  insert: (query) => client.query(query),
};
