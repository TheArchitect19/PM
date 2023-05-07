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
function authenticate(req, res, next) {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ')[1];
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

app.post('/store/regSelGen', (req, res) => {
	const data = req.body;
	const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
	res.json({ accessToken: accessToken });
})

app.get('/store/registerSeller', authenticate, (req, res) => {
	const phone = res.user.phone;
	client.query('insert into users (phone) values ($1)', [phone], (err, results) => {
		if (err) {
			res.send('-1');
		}
		else {
			res.send("0");
		}
	})
})

app.post('/store/checkSeller', (req, res) => {
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


app.listen(5000, () => {
	console.log("Server Running on port 5000");
});
