const express = require('express');
var bodyParser = require('body-parser')
const { Client } = require('pg');
const cors = require("cors");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

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

// middleware


// end points
app.post('/store/login', (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password
  }

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

app.get('/store/view-table', authenticate, (req, res) => {
  // console.log(res.user);
  if (res.user.username === "PM" && res.user.password === "?@123PM?@1983") {
    client.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error
      }
      res.send(results.rows);
    })
  }
  else res.sendStatus(403);
});

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  // const  = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    res.user = user;
    next();
  })
}

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