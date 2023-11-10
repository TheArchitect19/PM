import React from "react";
import styles from "./Footer.module.css";
import {
  AiFillMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiTwotonePhone,
} from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterWrapper}>
        <div className={styles.FooterSection}>
          <div className={styles.FooterHeading}>QUICK LINKS</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/join">Join us</a>
            </li>
            <li>
              <a href="/login">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className={styles.FooterSection}>
          <div className={styles.FooterHeading}>COMPANY</div>
          <ul>
            <li>
              <a href="/story">Story</a>
            </li>
            <li>
              <a href="/impact">Impact</a>
            </li>
            <li>
              <a href="/vision">Vision</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
          </ul>
        </div>

        <div className={styles.FooterSection}>
          <div className={styles.FooterHeading}>VISIT OUR BLOG</div>
          <ul>
            <li>
              <a href="/blogs">
                Jigyasa
              </a>{" "}
              by PM
            </li>
          </ul>
          <div className={styles.FooterHeading}>FOLLOW US ON</div>
          <ul className={styles.SocialIcons}>
            <li>
              <AiOutlineInstagram size={30} />
            </li>
            <li>
              <AiOutlineFacebook size={30} />
            </li>
            <li>
              <AiOutlineYoutube size={30} />
            </li>
            <li>
              <RxTwitterLogo size={30} />
            </li>
          </ul>
        </div>
        <div className={styles.FooterSection}>
          <div className={styles.FooterHeading}>CONTACT US</div>
          <ul className={styles.ContactInfo}>
            <a href="tel:+910788-456897">
             
                <AiTwotonePhone size={25} />
             
            </a>
            <a href="mailto:jigyasapandrimarket@gmail.com">
             
                <AiFillMail size={25} />
             
            </a>
            <a href="https://goo.gl/maps/GY2FSKUJaiesTwnk9">
              
                <ImLocation size={25}/>
              
            </a>
            <a href="/terms&conditions">
              <li>Terms & Conditions</li>
            </a>
          </ul>
        </div>
      </div>
      <div className={styles.FooterBottom}></div>
    </div>
  );
};

export default Footer;
