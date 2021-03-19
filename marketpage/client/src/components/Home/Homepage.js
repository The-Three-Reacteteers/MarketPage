import React from 'react';
import Card from 'react-bootstrap/card';
import Logo from "../../assets/MarketPage.png";
import { Container} from "reactstrap"
//import Navigation from "./Navbar"

const Homepage = () => {
    return (
        <>
        <Container />
            <Card>
                <Card.Header className="profile-title">Welcome!</Card.Header>
                <Card.Body>
                    <Card.Text className="profile-text">
                        Welcome to MarketPage.
                        <br></br>
                        A place to save books to your personal collection and more!
                    </Card.Text>
                </Card.Body>
            </Card>
            <img src={Logo} className="logo"/>
        </>
    )
}

export default Homepage
