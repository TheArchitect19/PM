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
	const data = req.body.data;
	const num = data.substr(data.length - 10);
	let ind = data.length - 1;
	for (let i = 0; i < 10; i++) {
		ind--;
	}
	let isd = "";
	for (let x = 0; x <= ind; x++) {
		isd += data[x];
	}

	let flag = 0;
	client.query(`select * from users where isd=$1 and phone=$2`, [isd, num], (error, results) => {
		if (error) {
			console.log(error);
			res.send("-1");
			return;
		}
		else {
			console.log(results.rows);
			if (results.rows.length != 0) {
				flag = 1;
			}
		}
	})

	  // client.query(`insert into users (isd, phone) values ($1, $2)`, [data.isd, data.phone], (error, results) => {
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
})

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})