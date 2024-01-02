import { React } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pmnavlogo from "../assets/img/pm-nav-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={pmnavlogo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                {/* <a class="nav-link mx-3" href="/"> */}
              Home
                <span className="sr-only">(current)</span>
                {/* </a> */}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              {/* <a class="nav-link mx-3" href="#"> */}
                Our Services
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a class="nav-link mx-3" href="#"> */}
                Blogs
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a class="nav-link mx-3" href="#"> */}
                Our Plans
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a class="nav-link mx-3" href="#"> */}
                Join Us
              {/* </a> */}
            </li>
            <li className="nav-item">
              {/* <a class="nav-link mx-3" href="#"> */}
                Sign Up
              {/* </a> */}
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0 mr-3" type="submit">
              Search
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  <ShoppingCartIcon style={{ fontSize: "30px" }} />
                </a>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link mx-3" href="#"> */}
                <AccountCircleIcon style={{ fontSize: "30px" }} />
                {/* </a> */}
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
