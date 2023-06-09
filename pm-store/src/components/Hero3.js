import { React, useState } from "react";
import styles from "./Hero.module.css";
const Navbar = () => {
  return (
    <>
    <div  style={{backgroundSize:"cover",backgroundPosition:"center center"}} className={styles.colnav1}>
     
      <h2>Tell us a little about your store.</h2>
      <h6>This is an initial information of your Business. You can change it anytime.</h6>
      
      <form>
            <label>
            Owner :
                <input type="text" name="name" placeholder="Enter the name of the owner" />
            </label>
            <label>
                Name:
                <input type="text" name="name" placeholder="Enter the name of the shop" />
            </label>
            <label>
            Description :
                <input style={{height: '50px'}} type="text" name="name" placeholder="Enter a brief description of the shop, its offerings, or its unique selling points." />
            </label>
            <label>
            Address :
                <input style={{height: '70px'}} type="text" name="name" placeholder="Enter the  location of the shop" />
            </label>
            <label>
            Business Name :
                <input type="text" name="name" placeholder="Select your business type" />
            </label>
            <div >
            <input type="checkbox" style={{height: '15px',boxShadow:'none'}} ></input>
            <p style={{color: 'white'}}>Is your shop located outside Chhattisgarh? </p>
            </div>
            <label>
            GST Number :
                <input type="text" name="name" placeholder="Enter the GST number" />
            </label>
            <label>
            Bank Account Number :
                <input type="text" name="name" placeholder="Enter the bank account number" />
            </label>
            <div>
               <input style={{width: '120px',marginTop:'25px'}} type="submit" value="Register" />
            </div>
     </form>
      
        
            
     
    </div>
    </>
  );
};

export default Navbar;
