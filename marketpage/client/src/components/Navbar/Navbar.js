import { React, useState } from "react";
import { Col } from 'reactstrap';
import Logo from "../../assets/MarketPage-logo.png";
import { Form, FormControl, Button } from "react-bootstrap";
import "./Navbar.css";


const Navbar = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <div class="navigation">
        <ul className="nav nav-tabs">
          <Col xs=".5">
            <li className="nav-item">
              <img src={Logo} />
            </li>
          </Col>
          <Col xs=".5">
          <li className="nav-item">
            <a
              href="/"
              onClick={() => props.handlePageChange("Home")}
              className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
            >
              Home
            </a>
          </li>
          </Col>
          <Col xs=".5">
          <li className="nav-item">
            <a
              href="search"
              onClick={() => props.handlePageChange("Search")}
              className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
            >
              Search
            </a>
          </li>
          </Col>
          <Col className="navbar"></Col>
          <Col xs=".5">
          <li className="nav-item">
            <a
              href="signup"
              onClick={() => props.handlePageChange("SignUp")}
              className={props.currentPage === "SignUp" ? "nav-link active" : "nav-link"}
            >
              Sign-Up
            </a>
          </li>
          </Col>
          <Col xs=".5">
          <li className="nav-item">
            <a
              href="login"
              onClick={() => props.handlePageChange("LogIn")}
              className={props.currentPage === "LogIn" ? "nav-link active" : "nav-link"}
            >
              Log-In
            </a>
          </li>
          </Col>
          <Col xs=".5">
          <li className="nav-item">
            <a
              href="profile"
              onClick={() => props.handlePageChange("Userpage")}
              className={props.currentPage === "Userpage" ? "nav-link active" : "nav-link"}
            >
              Your Profile
            </a>
          </li>
          </Col>
        </ul>
    </div>
    )
}

export default Navbar
