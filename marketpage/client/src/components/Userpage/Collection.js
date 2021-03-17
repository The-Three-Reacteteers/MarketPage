import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Col, Row } from "reactstrap";
import Navigation from "./Navbar"

const Collection = () => {
    return (
        <>
        <Navigation />
        <Row>
        <Col>
            <Card>
                <Card.Header>Your Collection</Card.Header>
                <Card.Body>
                    <Card.Text className="collection-text">
                        <Row>
                            <Col xs="2">
                                {/* Image */}
                            </Col>
                            <Col>
                            <Col xs=".5">
                                    <Row className="book-title">
                                        
                                    </Row>
                                    <Row className="book-author">
                                      
                                    </Row>
                                </Col>
                                <Row className="book-desc">

                                </Row>
                            </Col>
                            <Col xs="1" className="remove">
                                <Row className="price">
                                    
                                </Row>
                                <Row>
                                <Button className="buttons" size="sm" active>
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

export default Collection
