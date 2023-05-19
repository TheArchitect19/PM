import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pmnavlogo from "../assets/img/pm-nav-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img src={pmnavlogo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <Link to="/">
              <a class="nav-link mx-3" href="#">
              Home
                <span class="sr-only">(current)</span>
              </a>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="/about">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
                Our Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
                Our Plans
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
                Join Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#">
                Sign Up
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit">
              Search
            </button>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link mx-3" href="/">
                  <ShoppingCartIcon style={{ fontSize: "30px" }} />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mx-3" href="#">
                  <AccountCircleIcon style={{ fontSize: "30px" }} />
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
