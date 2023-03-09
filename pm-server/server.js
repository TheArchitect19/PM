const { Client } = require('pg');

const client = new Client({
  user: 'linpostgres',
  host: 'lin-17746-6070-pgsql-primary.servers.linodedb.net',
  database: 'postgres',
  password: 'rd^4qOmguVBJrIWZ',
  port: 5432,
//   ssl  : {
//     ca : fs.readFileSync('./Pandri_Market-ca-certificate.crt')
//   }
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});