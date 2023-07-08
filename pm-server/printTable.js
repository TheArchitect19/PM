const { Client } = require('pg');
const Table = require('cli-table');
require('dotenv').config();

const client = new Client({
	user: process.env.db_user,
	host: '170.187.253.75',
	database: 'PM',
	password: process.env.db_password,
	port: 5432,
});

// Connect to the PostgreSQL database
client.connect();

// Function to print the table
const printTable = (tableName) => {
  // Fetch the data from the table
  client.query(`SELECT * FROM ${tableName}`, (err, result) => {
    if (err) {
      // Handle the error
      console.error('Error fetching data from the database:', err);
      client.end();
      return;
    }

    // Extract the rows from the query result
    const rows = result.rows;
    console.log(rows);

    client.end();
  });
};

// Get the table name from command line arguments
const tableName = process.argv[2];

// Check if the table name is provided
if (!tableName) {
  console.error('Please provide a table name as an argument.');
  process.exit(1);
}

// Call the printTable function with the provided table name
printTable(tableName);
