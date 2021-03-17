import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container, Col, Row } from "reactstrap";
import "./Search.css"

const Search = () => {
    return (
        <>
            <Card className="search-cards">
                <form>
                    <Card.Header><h3>Search for a Book</h3></Card.Header>
                        <Row className="search-bar">
                            <Col>
                                <div className="form-group">
                                    <label>Search by Book Title:</label>
                                    <input type="text" className="form-control" placeholder="Book Title" />
                                </div>
                                <Button className="buttons-center" size="sm">
                                    <div className="small-text">Search</div>
                                </Button>
                            </Col>
                            <Col>
                                <div className="form-group">
                                    <label>Search by Author Name:</label>
                                    <input type="text" className="form-control" placeholder="Author Name" />
                                </div>
                                <Button className="buttons-center" size="sm">
                                    <div className="small-text">Search</div>
                                </Button>
                            </Col>
                            <Col>
                                <div className="form-group">
                                    <label>Search by ISPN:</label>
                                    <input type="text" className="form-control" placeholder="ISPN" />
                                </div>
                                <Button className="buttons-center" size="sm">
                                    <div className="small-text">Search</div>
                                </Button>
                            </Col>
                        </Row>
                </form>
            </Card>
            <Card className="search-cards">
                <Card.Header><h3>Search Results</h3></Card.Header>
                <Card.Body>
                    <Card.Text>
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
                                    <div className="small-text">Add to Collection</div>
                                </Button>
                                </Row>
                                <Row>
                                <Button className="buttons space" size="sm">
                                    <div className="small-text">Add to Wishlist</div>
                                </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Search