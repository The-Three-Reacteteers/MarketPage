import React from "react";
import { Table, Card } from "react-bootstrap";
//import Logo from "../../assets/MarketPage.png";
import { useAuthContext } from "../../data/AuthProvider";
import UpdatePassword from "../UpdatePassword/UpdatePassword";
import Navigation from "./Navbar";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <>
      <Navigation />
      <Card>
        <Card.Header className="profile-title">Profile Page</Card.Header>
        <Card.Body>

          <Card.Text className="profile-text">
            Welcome back {user.firstname}!
            <br></br>
            Use the navigation above to check out your collection and wishlist.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <h3 className="center-text">User Profile</h3>
          <hr />
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{user.firstname}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{user.lastname}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <UpdatePassword />
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
