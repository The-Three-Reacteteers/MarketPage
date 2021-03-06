import React from "react";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Container, Col } from "reactstrap";
import { useAuthContext } from "../../data/AuthProvider";
import "./UserPage.css";

const Navigation = () => {
  const history = useHistory();
  const { logout } = useAuthContext();

  return (
    <Container>
      <Col>
        <Nav fill variant="tabs" defaultActiveKey="">
          <Nav.Item>
            <Nav.Link
              href="/profile"
              onClick={(ev) => {
                ev.preventDefault();
                history.push("/profile");
              }}
              className="user-nav-tab"
            >
              <p className="small-nav">Your Profile</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/collection"
              onClick={(ev) => {
                ev.preventDefault();
                history.push("/collection");
              }}
              className="user-nav-tab"
            >
              <p className="small-nav">Collection</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/wishlist"
              onClick={(ev) => {
                ev.preventDefault();
                history.push("/wishlist");
              }}
              className="user-nav-tab"
            >
              <p className="small-nav">Wish List</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={(ev) => {
                ev.preventDefault();
                logout().then(() => {
                  history.push("/");
                });
              }}
              href="/"
              className="user-nav-tab"
            >
              <p className="small-nav">Log Out</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <br></br>
    </Container>
  );
};

export default Navigation;
