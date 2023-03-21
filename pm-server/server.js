const express = require('express')
const { Client } = require('pg')
const cors = require("cors");
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./Passport');

const app = express()
const port = 5000
app.use(cors());

app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());

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


app.get('/store', (req, res) => {
  res.send("Backend is working");
});

// Auth
app.get('/store/auth', passport.authenticate('google', {
  scope: ['email', 'profile']
})
);

// Auth Callback
app.get('/store/auth/callback',
  passport.authenticate('google', {
    successRedirect: '/store/auth/callback/success',
    failureRedirect: '/store/auth/callback/failure'
  }));

// Success
app.get('/store/auth/callback/success', async (req, res) => {
  if (!req.user)
    res.redirect('/store/auth/callback/failure');
  const email = req.user.email;
  const name = req.user.displayName;

  client.query(`insert into users (name, email) values ($1, $2)`, [name, email], (err1, res1) => {
    if (err1) {
      if (err1.code === "23505") {
        client.query(`select name, email from users where email=$1`, [email], (err2, res2) => {
          if (err2) {
            console.log('-1');
            // res.redirect("http://localhost:3000/register");
            res.redirect("https://store.pandrimarket.com/register");
          }
          else {
            let data = {
              email: res2.rows[0].email,
              name: res2.rows[0].name,
              login: 1
            }
            res.cookie('userData', data, { path: '/' });
            // res.redirect("http://localhost:3000/welcome");
            res.redirect("https://store.pandrimarket.com/welcome");
          }
        })
      }
      else {
        // res.redirect("http://localhost:3000/register");
        res.redirect("https://store.pandrimarket.com/register");
      }
    }
    else {
      let data = {
        email: email,
        name: name,
        login: 1
      }
      res.cookie('userData', data, { path: '/' });
      // res.redirect("http://localhost:3000/welcome");
      res.redirect("https://store.pandrimarket.com/welcome");
    }
  })
});

// failure
app.get('/store/auth/callback/failure', (req, res) => {
  res.send("Error");
})



// end points

app.get('/store/view-table', (req, res) => {
  client.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})