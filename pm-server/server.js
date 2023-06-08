const express = require('express');
var bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const { Client } = require('pg');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { imageUpload, getImg } = require('./upload');
require('dotenv').config();

const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 5000;
app.use(cors({ origin: "https://pandrimarket.com", credentials: true }));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cookieParser());

app.use(express.json());
app.use(cookieParser());

const client = new Client({
	user: process.env.db_user,
	host: '170.187.253.75',
	database: 'PM',
	password: process.env.db_password,
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

// Route for login
app.post('/login', (req, res) => {
	const { phone, password } = req.body;

	if (!phone || !password) {
		return res.status(400).json({ message: 'Please provide a valid phone and password' });
	}

	try {
		// Check if the provided phone and password match a user in the database
		const query = 'SELECT * FROM users WHERE phone = $1 AND password = $2';
		const result = client.query(query, [phone, password]);

		if (result.rowCount === 0) {
			return res.status(401).json({ message: 'Invalid phone or password' });
		}
		// User authenticated successfully
		res.cookie('token', 'token', { httpOnly: true, maxAge: 3600 * 1000 });
		console.log(res.cookie);
		res.json({ message: 'Login successful' });
	} catch (error) {
		console.error('Error during login:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
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

app.get('/test', (req, res) => {
	res.cookie('token', 'token', { maxAge: 3600 * 1000 });
	res.send("0");
});

app.post('/upload', upload.single('image'), imageUpload);
app.get('/getimg', getImg);

app.listen(5000, () => {
	console.log("Server Running on port 5000");
});
