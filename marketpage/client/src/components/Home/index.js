import React from 'react'
import { Container, Row, Col } from "reactstrap"
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
    <Container className="mt-5">
        <Row>
            
            <Col xs="6" className="main-post" style={{ 
      backgroundImage: `url("https://edgewoodreit.com/wp-content/uploads/2017/05/placeholder-800x400.jpeg")` 
    }}></Col>
            <Col>
                <Row className="side-post" ></Row>
                <Row className="side-post mt-5 mb-5"></Row>
                <Row className="side-post"></Row>
            </Col>
        </Row>
    </Container>
        <br></br>
        <Container fluid>
        <Row>
            <Col><Image src="holder.js/100px250" fluid /></Col>
            <Col><Image src="holder.js/100px250" fluid /></Col>
            <Col><Image src="holder.js/100px250" fluid /></Col>
            <Col><Image src="holder.js/100px250" fluid /></Col>
            <Col><Image src="holder.js/100px250" fluid /></Col>
        </Row>
    </Container>
    </>
    );
}

export default HomePage