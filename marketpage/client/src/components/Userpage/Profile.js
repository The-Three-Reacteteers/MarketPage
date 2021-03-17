import React from 'react';
import Card from 'react-bootstrap/card';
import Logo from "../../assets/MarketPage.png";
import Navigation from "./Navbar"

const Profile = () => {
    return (
        <>
        <Navigation />
            <Card>
                <Card.Header className="profile-title">Welcome, User!</Card.Header>
                <Card.Body>
                    <Card.Text className="profile-text">
                        Welcome back to MarketPage!
                        <br></br>
                        Use the navigation above to check out your collection and wishlist!
                    </Card.Text>
                </Card.Body>
            </Card>
            <img src={Logo} className="logo"/>
        </>
    )
}

export default Profile
