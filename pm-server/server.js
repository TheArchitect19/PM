const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const cors = require("cors");

const app = express()
const port = 5000
app.use(cors());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const client = new Client({
  user: 'admin',
  host: '170.187.253.75',
  database: 'PM',
  password: '?@123PM?@1983',
  port: 5432,
})


client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// end points

app.get('/view-table', (req, res) => {
  client.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows);
  })
})

app.post('/register', (req, res) => {
  const data = req.body;

  client.query(`insert into users (name, email, phone, address, seller, buyer, designation, password) values ($1, $2, $3, $4, $5, $6, $7, $8)`, [data.name, data.email, data.phone, data.address, data.seller, data.buyer, data.designation, data.password], (error, results) => {

    if (error) {
      if (error.code === '23505') {
        res.send('-1');
      }
      else {
        res.send('-2');
      }
    }
    else {
      res.status(200).send('0');
    }
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})