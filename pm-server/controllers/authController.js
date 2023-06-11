const jwt = require("jsonwebtoken");
require('dotenv').config();

const age = 3 * 24 * 60 * 60    // 3 days => in seconds

const createToken = (data) => {
	// payload => data
	return jwt.sign({ data }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: age
	})
}

// saves phone number of a user after verifying it
module.exports.signup = (req, res) => {
	const client = req.client
	client.query('insert into users (phone) values ($1)', [phone], (err, results) => {
		if (err) {
			res.send('-1');
		}
		else {
			res.send("0");
		}
	})
}

// To login the user with password
module.exports.login = (req, res) => {
	const client = req.client
	const { phone, password } = req.body;
	if (!phone || !password) {
		return res.status(400).json({ message: 'Please provide a valid phone and password' });
	}

	try {
		// Check if the provided phone and password match a user in the database
		const query = 'SELECT * FROM users WHERE phone = $1';
		client.query(query, [phone], (err, results) => {
			if (err) {
				console.error('Error during login:', err);
				res.status(500).json({ message: 'Internal server error', ok: false });
			}
			else {
				if (results.rowCount === 0) {
					res.status(404).json({ message: 'Sorry, No such user found with this phone number', ok: false });
				}
				else {
					const pwd = results.rows[0].password;
					if (pwd === null) {
						res.status(403).json({ message: "You don't have setup your password, please try to login with OTP, and then save a password for your profile.", ok: false });
					}
					else if (pwd === password) {
						// User authenticated successfully
						const token = createToken({ "phone": phone });
						res.cookie('login', token, { httpOnly: true, maxAge: age * 1000, SameSite: "none" });
						res.status(200).json({ message: 'Login successful', redirectUrl: '/', ok: true});
					}
					else {
						res.status(401).json({ message: 'Wrong Password', ok: false });
					}
				}
			}
		});

	} catch (error) {
		console.error('Error during login:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
}

//saving the password after signup
module.exports.savePassword = (req, res) => {
	const client = req.client
	const password = req.body.password;
	client.query('INSERT INTO users (password) VALUES ($1)', [password], (err, results) => {
		if (err) {
			console.error(err);
			res.status(500).send('Error saving password');
		} else {
			res.status(200).send('Password saved successfully');
		}
	});
}

// check if the user with given phone number exists
module.exports.checkPhoneExists = (req, res) => {
	const client = req.client
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
}

// to check if the user is logged in
module.exports.checkLogin = (req, res) => {
	const token = req.cookies.login;
	// check if token exists
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
				console.log(err);
                res.send("1");
            }
            else {
                res.send("0");
            }
        })
    }
    else {
        res.send("1");
    }
}