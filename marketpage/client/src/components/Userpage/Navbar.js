import React from 'react'
import { Nav } from "react-bootstrap"
import { Container, Col } from "reactstrap"
import { Link } from "react-router-dom";
import "./UserPage.css"

const Navigation = () => {
    return (
        <Container>
            <Col>
                <Nav fill variant="tabs" defaultActiveKey=""> 
                    <Nav.Item > 
                        <Nav.Link href="" className="user-nav-tab">
                            <Link to="/profile"><p className="small-nav">Your Profile</p></Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="" className="user-nav-tab">
                            <Link to="/collection"><p className="small-nav">Collection</p></Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="" className="user-nav-tab">
                            <Link to="/wishlist"><p className="small-nav">Wish List</p></Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <br></br>
        </Container>
    )
}

export default Navigation
