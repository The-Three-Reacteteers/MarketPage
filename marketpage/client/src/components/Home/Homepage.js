import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Homepage.css";
import { Card, CardDeck, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ParticlesJS from "./Particles";
import Logo from "../../assets/MarketPage.png";

const Homepage = () => {
  return (
    <>
      <ParticlesJS />
      <Container fluid className="bkg-blk pt-3">
        <Row>
          <img src={Logo} className="logo" />
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <h1 className="mt-4 mb-4 text-white genre-fz">Books to Enjoy</h1>
          </Col>
        </Row>
        <CardDeck className="ml-5 mr-5">
          <Card className="border-0 z-index">
            <Link>
              <Card.Img
                variant="top"
                src="https://covers.openlibrary.org/b/id/2950329-L.jpg"
              />
             </Link>
          </Card>
          <Card className="border-0 z-index">
            <Link>
              <Card.Img
                variant="top"
                src="https://covers.openlibrary.org/b/id/8260115-L.jpg"
              />
            </Link>
          </Card>
          <Card className="hide-sm border-0 z-index">
            <Link>
              <Card.Img
                variant="top"
                src="https://covers.openlibrary.org/b/id/8536792-L.jpg"
              />
            </Link>
          </Card>
          <Card className="hide-sm border-0 z-index">
            <Link>
              <Card.Img
                variant="top"
                src="https://covers.openlibrary.org/b/id/10201266-L.jpg"
              />
            </Link>
          </Card>
          <Card className="hide-sm border-0 z-index">
            <Link>
              <Card.Img
                variant="top"
                src="https://covers.openlibrary.org/b/id/8761716-L.jpg"
              />
            </Link>
          </Card>
          <Card className="hide-md border-0 z-index">
            <Link>
              <Card.Img
                variant="top"
                src="https://covers.openlibrary.org/b/id/2950331-L.jpg"
              />
            </Link>
          </Card>
          <Card className="hide-lg border-0 z-index">
            <Link>
              <Card.Img
                variant="top"
                src="https://covers.openlibrary.org/b/id/8504357-L.jpg"
              />
            </Link>
          </Card>
          <Card className="hide-xl border-0 z-index">
            <Link>
              <Card.Img
                variant="top"
                src="https://covers.openlibrary.org/b/id/1968622-L.jpg"
              />
            </Link>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
};
export default Homepage;
