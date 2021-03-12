import { React, useState } from "react";
import { Col, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
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
          <div>
            <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle className="drop-button">
                Discover ⮟
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Genre 1</DropdownItem>
                <DropdownItem>Genre 2</DropdownItem>
                <DropdownItem>Genre 3</DropdownItem>
                <DropdownItem>Genre 4</DropdownItem>
                <DropdownItem>Genre 5</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          </Col>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
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
        </ul>
    </div>
    )
}

export default Navbar
