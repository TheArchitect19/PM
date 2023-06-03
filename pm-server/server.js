const express = require('express');
var bodyParser = require('body-parser')
const { Client } = require('pg');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const {imageUpload, getImg} = require('./upload');
require('dotenv').config();

const upload = multer({ dest: 'uploads/' });

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

app.get('/', (req, res) => {
	res.send("Backend is ready");
});

// saves phone number of a user after verifying it
app.post('/signup', (req, res) => {
	const phone = req.body.phone;
	client.query('insert into users (phone) values ($1)', [phone], (err, results) => {
		if (err) {
			res.send('-1');
		}
		else {
			res.send("0");
		}
	})
})

//saving the password after signup
app.post('/savePassword', (req, res) => {
	const password = req.body.password;
	client.query('INSERT INTO passwords (password) VALUES ($1)', [password], (err, results) => {
	  if (err) {
		 console.error(err);
		 res.status(500).send('Error saving password');
	  } else {
		 res.status(200).send('Password saved successfully');
	  }
	});
 });
 

// check if the user with given phone number exists
app.post('/checkPhoneExists', (req, res) => {
	const phone = req.body.phone;
	client.query('select from users where phone = $1', [phone], (err, results) => {
		if (err) {
			res.send('-1');
		}
		else {
			if (results.rows.length === 1) {
				res.send('1');
			}
			else {
				res.send('0');
			}
		}
	});
})

app.post('/upload', upload.single('image'), imageUpload);
app.get('/getimg', getImg);

app.listen(5000, () => {
	console.log("Server Running on port 5000");
});
