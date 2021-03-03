import React from "react";
import { Container, Row, Col } from 'reactstrap';

function NavTabs(props) {
  return (
    <div class="navigation">
      <Container>
        <Row>
          <ul className="nav nav-tabs">
            <Col>
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => props.handlePageChange("Home")}
                className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
              >
                Home
              </a>
            </li>
            </Col>
            <Col>
            <li className="nav-item">
              <a
                href="#Discover"
                onClick={() => props.handlePageChange("Discover")}
                className={props.currentPage === "Discover" ? "nav-link active" : "nav-link"}
              >
                Discover
              </a>
            </li>
            </Col>
            <Col>
            <li className="nav-item">
              <a
                href="#SignUp"
                onClick={() => props.handlePageChange("SignUp")}
                className={props.currentPage === "SignUp" ? "nav-link active" : "nav-link"}
              >
                Sign-Up
              </a>
            </li>
            </Col>
            <Col>
            <li className="nav-item">
              <a
                href="#LogIn"
                onClick={() => props.handlePageChange("LogIn")}
                className={props.currentPage === "LogIn" ? "nav-link active" : "nav-link"}
              >
                Log-In
              </a>
            </li>
            </Col>
          </ul>
        </Row>
      </Container>
    </div>
  );
}

export default NavTabs;
