import React from "react";
import styles from "./Footer.module.css";
import {AiFillMail, AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiTwotonePhone} from 'react-icons/ai'
import {RxTwitterLogo} from 'react-icons/rx'
import {ImLocation} from 'react-icons/im'

const Footer = () => {
  return (
    <>
      <div className={styles.FooterContainer}>
        <div className={styles.FooterWrapper}>
          <div>
            <div className={styles.FooterHeading}>QUICK LINKS</div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/join">Join us</a></li>
              <li><a href="/login">Sign Up</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.FooterHeading}>COMPANY</div>
            <ul>
              <li><a href="/story">Story</a></li>
              <li><a href="/impact">Impact</a></li>
              <li><a href="/vision">Vision</a></li>
              <li><a href="/community">Community</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.FooterHeading}>VISIT OUR BLOG</div>
            <ul>
              <li><a href="/blogs" style={{fontFamily: "cursive"}} >Jigyasa </a> by PM</li>
            </ul>
            <div className={styles.FooterHeading}>FOLLOW US ON</div>
            <ul>
              <li> < AiOutlineInstagram size={30}/> </li>
              <li> < AiOutlineFacebook size={30}/> </li>
              <li> < AiOutlineYoutube size={30}/> </li>
              <li> < RxTwitterLogo size={30}/> </li>
            </ul>
          </div>
          <div>
            <div className={styles.FooterHeading}>CONTACT US</div>
            <ul>
            <a style={{textDecoration: 'none'}} href="tel:+910788-456897"><li> <AiTwotonePhone size={20} style={{display:"flex", flexWrap:"wrap", paddingRight:"0.5rem"}}/> 0788-456897</li></a>
              <a style={{textDecoration: 'none'}} href="mailto:jigyasapandrimarket@gmail.com"><li> <AiFillMail size={20} style={{display:"flex", flexWrap:"wrap", paddingRight:"0.5rem"}}/> jigyasapandrimarket@gmail.com</li></a>
              <a style={{textDecoration: 'none'}} href="https://goo.gl/maps/GY2FSKUJaiesTwnk9"><li> <ImLocation size={20} style={{display:"flex", flexWrap:"wrap", paddingRight:"0.5rem"}}/> Pandri Market, Raipur, C.G., India</li></a>
            </ul>
          </div>
        </div>
        <div className={styles.FooterBottom}></div>
      </div>
    </>
  );
};

export default Footer;
