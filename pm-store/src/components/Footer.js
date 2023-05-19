import React from "react";
import styles from "./Footer.module.css";
import insta from "../assets/svg/Instagram.png";
import fb from "../assets/svg/Facebook.png";
import yt from "../assets/svg/YouTube.png";
import twitter from "../assets/svg/Twitter.png";
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
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Blogs</li>
              <li>Join Us</li>
              <li>Sign Up</li>
            </ul>
          </div>
          <div>
            <div className={styles.FooterHeading}>COMPANY</div>
            <ul>
              <li>Story</li>
              <li>Impact</li>
              <li>Vision</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <div className={styles.FooterHeading}>VISIT OUR BLOG</div>
            <ul>
              <li><a>Jigyasa </a> by PM</li>
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
              <li> <AiTwotonePhone size={20} style={{display:"flex", flexWrap:"wrap", paddingRight:"0.5rem"}}/> 0788-456897</li>
              <li> <AiFillMail size={20} style={{display:"flex", flexWrap:"wrap", paddingRight:"0.5rem"}}/> jigyasapandrimarket@gmail.com</li>
              <li> <ImLocation size={20} style={{display:"flex", flexWrap:"wrap", paddingRight:"0.5rem"}}/> Pandri Market, Raipur, C.G., India</li>
            </ul>
          </div>
        </div>
        <div className={styles.FooterBottom}></div>
      </div>
    </>
  );
};

export default Footer;
