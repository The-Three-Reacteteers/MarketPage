import React from 'react'
import { Nav } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import { Container, Col } from "reactstrap"
import "./UserPage.css"

const Navigation = () => {
    const history = useHistory()
    return (
        <Container>
            <Col>
                <Nav fill variant="tabs" defaultActiveKey=""> 
                    <Nav.Item > 
                        <Nav.Link href="/profile" onClick={ev=> {
                            ev.preventDefault();
                            history.push("/profile")
                        }} className="user-nav-tab">
                            <p className="small-nav">Your Profile</p></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/collection" onClick={ev=> {
                            ev.preventDefault();
                            history.push("/collection")
                        }} className="user-nav-tab">
                            <p className="small-nav">Collection</p></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/wishlist" onClick={ev=> {
                            ev.preventDefault();
                            history.push("/wishlist")
                        }} className="user-nav-tab">
                           <p className="small-nav">Wish List</p></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <br></br>
        </Container>
    )
}

export default Navigation
