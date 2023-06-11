const jwt = require("jsonwebtoken");
require('dotenv').config();

const addShop = (req, res) => {
    const data = req.body;
    const phone = res.user.data.phone;
    const client = req.client;

    client.query('INSERT INTO shops (owner, shop_name, shop_desc, shop_address, business_name, outside_cg, gst_no, bank_ac_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [phone, data.shop_name, data.shop_desc, data.shop_address, data.business_name, data.outside_cg, data.gst_no, data.bank_ac_no], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Shop added successfully');
        }
    });
}

module.exports = { addShop };