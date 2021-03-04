import React from 'react'
import { Container, Row, Col } from "reactstrap"

const HomePage = () => {
    return (
    <Container>
        <Row>
            <Col xs="8" className="main-post">1 of 2</Col>
            <Col>
                <Row className="side-post">1 of 3</Row>
                <Row className="side-post">2 of 3</Row>
                <Row className="side-post">3 of 3</Row>
            </Col>
        </Row>
        <br></br>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>
    );
}

export default HomePage