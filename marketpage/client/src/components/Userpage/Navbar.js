import React from 'react'
import { Nav } from "react-bootstrap"
import { Container, Col } from "reactstrap"
import "./UserPage.css"

const Navigation = () => {
    return (
        <Container>
            <Col>
                <Nav fill variant="tabs" defaultActiveKey=""> 
                    <Nav.Item > 
                        <Nav.Link href="/profile" className="user-nav-tab">
                            <p className="small-nav">Your Profile</p></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/collection" className="user-nav-tab">
                            <p className="small-nav">Collection</p></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/wishlist" className="user-nav-tab">
                           <p className="small-nav">Wish List</p></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <br></br>
        </Container>
    )
}

export default Navigation
