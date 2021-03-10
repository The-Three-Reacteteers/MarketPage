import React from 'react'
import { Nav } from "react-bootstrap"
import { Container } from "reactstrap"
import { Link } from "react-router-dom";
import "./UserPage.css"

const Navigation = () => {
    return (
        <Container className="user-nav">
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item> 
                    <Nav.Link href="/home" className="user-nav-tab">
                        <Link to="/">Your Profile</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="user-nav-tab">
                        <Link to="/collection">Collection</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="user-nav-tab">
                        <Link to="/wishlist">Wish List</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )
}

export default Navigation
