import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import drop from "../assets/svg/drop.png";
import styles from "./Navbar2.module.css"
const Navbar = () => {
  return (
    <>
    <div className={styles.colnav}>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="/">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link mx-3" href="/">
                PM Location 1 
          <img className={styles.drop} src={drop} alt="" />

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="/about">
              PM Location 2
          <img className={styles.drop} src={drop} alt="" />
             
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
              PM Location 3
          <img className={styles.drop} src={drop} alt="" />

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="/blogs">
              PM Location 4
          <img className={styles.drop} src={drop} alt="" />

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
              PM Location 5
          <img className={styles.drop} src={drop} alt="" />

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
              PM Location 6
          <img className={styles.drop} src={drop} alt="" />

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
              PM Location 7
          <img className={styles.drop} src={drop} alt="" />

              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
              PM Location 8
          <img className={styles.drop} src={drop} alt="" />

              </a>
            </li>
          </ul>
          
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
