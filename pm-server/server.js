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

app.post('/registerSeller', (req, res) => {
  const data = req.body;

  client.query(`insert into users (isd, phone, seller, buyer, iswhatsapp) values ($1, $2, 1, 0, 0)`, [data.isd, data.phone], (error, results) => {
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

app.post('/profileSeller', (req, res) => {
  const data = req.body;
  client.query(`update users set (name, email, address, designation, iswhatsapp, password)=($1, $2, $3, $4, $5, $6) where phone=$7 and isd=$8`, [data.name, data.email, data.address, data.designation, data.iswhatsapp, data.password, data.phone, data.isd], (error, results) => {
    if (error) {
      res.send('-2');
    }
    else {
      res.status(200).send('0');
    }
  })
})

app.post('/login', (req, res) => {
  const data = req.body;
  client.query(`select phone, password from users where phone=$2 and isd=$1`, [data.isd, data.phone], (error, results) => {
    if (error) {
      console.log(error);
      if (error.code === '23505') {
        res.send('-1');
      }
      else {
        res.send('-2');
      }
    }
    else {
      res.status(200).send(results.rows);
    }
  })
})

app.post('/savePassword', (req, res) => {
  const data = req.body;
  client.query(`update users set password=$1 where phone=$2 and isd = $3`, [data.password, data.phone, data.isd], (error, results) => {
    if (error) {
      res.send('-2');
    }
    else {
      res.status(200).send("0");
    }
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})