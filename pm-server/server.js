const express = require('express');
const session = require('express-session');
var bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const { Client } = require('pg');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const multer = require('multer');
const { imageUpload, getImg } = require('./upload');
require('dotenv').config();

const upload = multer({ dest: 'uploads/' });

const app = express();
const port = 5000;

const corsOptions = {
	origin: ["http://localhost:3000", "https://pandrimarket.com"],
	credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

app.use((req, res, next) => {
	req.client = client;
	next();
});

app.get('/', (req, res) => {
	res.send("Backend is ready");
});

app.use(authRoutes);
app.use(userRoutes);

app.get('/test', (req, res) => {
	res.cookie('token', 'your-token-value', {
		httpOnly: true,
		// secure: true,
		// sameSite: 'none',
		maxAge: 3600 * 1000, // 1 hour
		// domain: 'localhost:5500',
	}).send("0");
});

app.post('/upload', upload.single('image'), imageUpload);
app.get('/getimg', getImg);
app.get('/param', (req, res) => {
	const id = req.query.id;
	console.log(id);
	res.send(id);
})

app.listen(5000, () => {
	console.log("Server Running on port 5000");
});
