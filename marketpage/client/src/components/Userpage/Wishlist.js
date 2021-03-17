import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Col, Row } from "reactstrap";
import Navigation from "./Navbar"

const Wishlist = () => {
    return (
        <>
        <Navigation />
        <Row>
            <Col>
                <Card>
                    <Card.Header>User's Wishlist</Card.Header>
                    <Card.Body>
                        <Card.Text className="wishlist-text">
                            <Row>
                                <Col xs="2" className="book-image">
                                    <img src="https://via.placeholder.com/200x110" />
                                </Col>
                                <Col>
                                    <Col xs=".5">
                                        <Row className="book-title">
                                            Endgame
                                        </Row>
                                        <Row className="book-author">
                                            Nancy Garden
                                        </Row>
                                    </Col>
                                    <Row className="book-desc">
                                        A new town, a new school, a new start. That's what fourteen-year-old Gray Wilton believes as he chants, It's gonna be better, gonna be better here. But it doesn't take long for Gray to realize that nothing's going to change--there are bullies in every school, and he's always their punching bag. Their brutal words, physical abuse, and emotional torture escalate until Gray feels trapped in a world where he has no control, no support systems, and no way out--until the day he enters the halls of Greenford High School with his father's semiautomatic in hand.
                                    </Row>
                                </Col>
                                <Col xs="1" className="remove">
                                    <Row className="price">
                                        Price: $34.91
                                    </Row>
                                    <Row>
                                    <Button className="buttons" size="sm" active>
                                        <div className="small-text">Add to Collection</div>
                                    </Button>
                                    </Row>
                                    <Row>
                                    <Button className="buttons space" size="sm">
                                        <div className="small-text">Remove</div>
                                    </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs="1">
                <Button a href="/manual" className="buttons" size="sm" active>
                    Manually Add
                </Button>
            </Col>
        </Row>
    </>
    )
}

export default Wishlist
