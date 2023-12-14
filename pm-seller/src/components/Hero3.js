import { React, useState } from "react";
import styles from "./Hero.module.css";
import axios from 'axios';

const Navbar = () => {
    const [data, setData] = useState({
        name: "",
        description: "",
        address: "",
        business_name: "",
        isCG: false,
        GST: "",
        bank_account: "",
        type: 'seller',
        token: localStorage.getItem('user')
    });

    function handle(e) {
        const tmp = { ...data };
        if (e.target.name === "isCG") {
            tmp[e.target.name] = e.target.checked;
        }
        else {
            tmp[e.target.name] = e.target.value;
        }
        setData(tmp);
    }
    async function addShop() {
        try {
            const res = await axios.post('http://localhost:8000/api/seller/reg_shop', data);
            alert(res.data.message);
        }
        catch (error) {
            alert(error.response.data.message);
        }
    }
    return (
        <>
            <div style={{ backgroundSize: "cover", backgroundPosition: "center center" }} className={styles.colnav1}>
                <h2>Tell us a little about your store.</h2>
                <h6>This is an initial information of your Business. You can change it anytime.</h6>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Enter the name of the shop" onChange={(e) => handle(e)} />
                    </label>
                    <label>
                        Description :
                        <input style={{ height: '50px' }} type="text" name="description" placeholder="Enter a brief description of the shop, its offerings, or its unique selling points." onChange={(e) => handle(e)} />
                    </label>
                    <label>
                        Address :
                        <input style={{ height: '70px' }} type="text" name="address" placeholder="Enter the  location of the shop" onChange={(e) => handle(e)} />
                    </label>
                    <label>
                        Business Name :
                        <input type="text" name="business_name" placeholder="Your registered business name" onChange={(e) => handle(e)} />
                    </label>
                    <div style={{ display: 'flex' }}>
                        <input type="checkbox" name="isCG" style={{ height: '15px', boxShadow: 'none', width: '5vw', marginTop: '5px', marginLeft: '175px' }} onChange={(e) => handle(e)} />
                        <p style={{ color: 'white' }}>Is your shop located outside Chhattisgarh? </p>
                    </div>
                    <label>
                        GST Number :
                        <input type="text" name="GST" placeholder="Enter the GST number" onChange={(e) => handle(e)} />
                    </label>
                    <label>
                        Bank Account Number :
                        <input type="text" name="bank_account" placeholder="Enter your bank account number" onChange={(e) => handle(e)} />
                    </label>
                    <div>
                        <input style={{ width: '120px', marginTop: '25px', cursor: 'pointer' }} type="button" value="Register" onClick={addShop} />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Navbar;
