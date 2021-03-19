import { React } from "react";
import { Col } from "reactstrap";
import Logo from "../../assets/MarketPage-logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../data/AuthProvider";

const Navbar = (props) => {
  const { user } = useAuthContext();
  return (
    <div className="navigation">
      <ul className="nav nav-tabs">
        <Col xs=".5">
          <li className="nav-item">
            <img src={Logo} />
          </li>
        </Col>
        <Col xs=".5">
          <li className="nav-item">
            <Link
              to="/"
              className={
                props.currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
        </Col>
        <Col xs=".5">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                props.currentPage === "Search" ? "nav-link active" : "nav-link"
              }
            >
              Search
            </Link>
          </li>
        </Col>
        <Col className="navbar"></Col>
        {user === undefined ? (
          "Loading.."
        ) : user ? (
          <Col xs=".5">
            <li className="nav-item">
              <Link
                to="/profile"
                className={
                  props.currentPage === "Userpage"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Your Profile
              </Link>
            </li>
          </Col>
        ) : (
          <>
            {" "}
            <Col xs=".5">
              <li className="nav-item">
                <Link
                  to="/signup"
                  className={
                    props.currentPage === "SignUp"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Sign-Up
                </Link>
              </li>
            </Col>
            <Col xs=".5">
              <li className="nav-item">
                <Link
                  to="/login"
                  className={
                    props.currentPage === "LogIn"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Log-In
                </Link>
              </li>
            </Col>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
