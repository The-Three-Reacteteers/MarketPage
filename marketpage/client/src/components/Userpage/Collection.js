import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Col, Row } from "reactstrap";

const Collection = () => {
    return (
        <>
        <Row>
        <Col>
            <Card>
                <Card.Header>User's Collection</Card.Header>
                <Card.Body>
                    <Card.Text className="collection-text">
                        <Row>
                            <Col xs="2">
                                <img src="https://via.placeholder.com/200x110" />
                            </Col>
                            <Col>
                            <Col xs=".5">
                                    <Row className="book-title">
                                        Alive: The Story of the Andes Survivors
                                    </Row>
                                    <Row className="book-author">
                                        Piers Paul Read
                                    </Row>
                                </Col>
                                <Row className="book-desc">
                                    On October 12, 1972, a plane carrying a team of young rugby players crashed into the remote, snow-peaked Andes. Out of the forty-five original passengers and crew, only sixteen made it off the mountain alive. For ten excruciating weeks they suffered deprivations beyond imagining, confronting nature head-on at its most furious and inhospitable. And to survive, they were forced to do what would have once been unthinkable.
                                </Row>
                            </Col>
                            <Col xs="1" className="remove">
                                <Row className="price">
                                    Price: $26.90
                                </Row>
                                <Row>
                                <Button variant="secondary" size="sm" active>
                                    Remove
                                </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col xs="1">
            <Button variant="secondary" size="sm" active className="manually-add">
                Manually Add
            </Button>
        </Col>
        </Row>
    </>
    )
}

export default Collection
