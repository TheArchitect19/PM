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


app.get('/', (req, res) => {
  res.send("<button><a href='/auth'>Login With Google</a></button>")
});

async function register(email, name) {
  console.log(email);
  client.query(`insert into users (name, email, phone, isd) values ($1, $2, $3, $4)`, [name, email, '', ''], (err, res) => {
    if (err) {
      console.log(err);
      return err.code;
    }
    else {
      console.log('0');
      return '0';
    }
  })
}


// Auth
app.get('/auth', passport.authenticate('google', {
  scope:
    ['email', 'profile']
}));

// Auth Callback
app.get('/auth/callback',
  passport.authenticate('google', {
    successRedirect: '/auth/callback/success',
    failureRedirect: '/auth/callback/failure'
  }));

// Success
app.get('/auth/callback/success', async (req, res) => {
  if (!req.user)
    res.redirect('/auth/callback/failure');
  const email = req.user.email;
  const name = req.user.displayName;

  client.query(`insert into users (name, email) values ($1, $2)`, [name, email], (err1, res1) => {
    if (err1) {
      if (err1.code === "23505") {
        client.query(`select name, email from users where email=$1`, [email], (err2, res2) => {
          if (err2) {
            console.log('-1');
            res.redirect("http://localhost:3000/register");
          }
          else {
            console.log(res2.rows);
            res.cookie('email', res2.rows[0].email);
            res.cookie('name', res2.rows[0].name);
            res.cookie('login', '1')
            res.redirect("http://localhost:3000/welcome");
          }
        })
      }
      else {
        res.redirect("http://localhost:3000/register");
      }
    }
    else {
      res.cookie('email', email);
      res.cookie('name', name);
      res.cookie('login', '1')
      res.redirect("http://localhost:3000/welcome");
    }
  })
});

// failure
app.get('/auth/callback/failure', (req, res) => {
  res.send("Error");
})



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
  console.log(data);
  // const phone = data.substr(data.length - 10);
  // var i = data.length - 1;
  // for(let c = 0; c < 10; c++) {
  //   i--;
  // }
  // var isd = "";
  // for (let x = 0; x <= i; x++) {
  //   isd += data[x];
  // }

  // console.log(isd, phone);
  // client.quert(`select * from users where phone=$1 and isd=$2`, [isd, phone], (error, results) => {

  // })
  // client.query(`insert into users (isd, phone, seller, buyer, iswhatsapp) values ($1, $2, 1, 0, 0)`, [data.isd, data.phone], (error, results) => {
  //   if (error) {
  //     if (error.code === '23505') {
  //       res.send('-1');
  //     }
  //     else {
  //       res.send('-2');
  //     }
  //   }
  //   else {
  //     res.status(200).send('0');
  //   }
  // })
  res.send("0");
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