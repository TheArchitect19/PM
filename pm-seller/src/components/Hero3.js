import { React, useState } from "react";
import styles from "./Hero.module.css";
import url_json from "../url.json";

const url = url_json.url;

const Navbar = () => {
    const [data, setData] = useState({
        shop_name: "",
        shop_desc: "",
        shop_address: "",
        business_name: "",
        outside_cg: "",
        gst_no: "",
        bank_ac_no: ""
    });

    function handle(e) {
        const tmp = { ...data };
        tmp[e.target.name] = e.target.value;
        setData(tmp);
    }
    async function addShop() {
        await fetch(`${url}/addShop`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res);
                return res.text();
            })
            .then(res => {
                alert(res);
            });
    }
    return (
        <>
            <div style={{ backgroundSize: "cover", backgroundPosition: "center center" }} className={styles.colnav1}>

                <h2>Tell us a little about your store.</h2>
                <h6>This is an initial information of your Business. You can change it anytime.</h6>

                <form>
                    {/* <label>
            Owner :
                <input type="text" name="name" placeholder="Enter the name of the owner" />
            </label> */}
                    <label>
                        Name:
                        <input type="text" name="shop_name" placeholder="Enter the name of the shop" onChange={(e) => handle(e)} />
                    </label>
                    <label>
                        Description :
                        <input style={{ height: '50px' }} type="text" name="shop_desc" placeholder="Enter a brief description of the shop, its offerings, or its unique selling points." onChange={(e) => handle(e)} />
                    </label>
                    <label>
                        Address :
                        <input style={{ height: '70px' }} type="text" name="shop_address" placeholder="Enter the  location of the shop" onChange={(e) => handle(e)} />
                    </label>
                    <label>
                        Business Name :
                        <input type="text" name="business_name" placeholder="Your registered business name" onChange={(e) => handle(e)} />
                        {/* <select>
                            <option value="Select your business type" selected>Select your business type</option>
                            <option value="Clothing/Apparel">Clothing/Apparel</option>
                            <option value="Home and Furniture">Home and Furniture</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Beauty and Personal Care">Beauty and Personal Care</option>
                            <option value="Sports and Fitness">Sports and Fitness</option>
                            <option value="Toys and Games">Toys and Games</option>
                            <option value="Others">Others</option>
                        </select> */}
                    </label>
                    <div style={{ display: 'flex' }}>
                        <input type="checkbox" name="outside_cg" style={{ height: '15px', boxShadow: 'none', width: '5vw', marginTop: '5px', marginLeft: '175px' }} onChange={(e) => handle(e)} />
                        <p style={{ color: 'white' }}>Is your shop located outside Chhattisgarh? </p>
                    </div>
                    <label>
                        GST Number :
                        <input type="text" name="gst_no" placeholder="Enter the GST number" onChange={(e) => handle(e)} />
                    </label>
                    <label>
                        Bank Account Number :
                        <input type="text" name="bank_ac_no" placeholder="Enter your bank account number" onChange={(e) => handle(e)} />
                    </label>
                    <div>
                        <input style={{ width: '120px', marginTop: '25px' }} type="button" value="Register" onClick={addShop} />
                    </div>
                </form>




            </div>
        </>
    );
};

export default Navbar;
