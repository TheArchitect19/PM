const express = require('express');
var bodyParser = require('body-parser')
const { Client } = require('pg');
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const client = new Client({
  user: 'admin',
  host: '170.187.253.75',
  database: 'PM',
  password: '?@123PM?@1983',
  port: 5432,
});


client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/store', (req, res) => {
  res.send("Backend is ready");
});


// end points
app.get('/store/view-table', (req, res) => {
  client.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows);
  })
});

app.post('/store/register', (req, res) => {
  client.query(`insert into users (name, phone) values ($1, $2)`, [req.body.name, req.body.number], (err, results) => {
    if (err) {
      if (err.code === '23505') {
        res.send("-1");
      }
      else {
        res.send("1");
      }
    }
    else {
      res.send("0");
    }
  })
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});