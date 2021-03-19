import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Col, Jumbotron, Row } from "reactstrap";
import { BookCollectionContext } from "../../data/BookCollectionProvider";
import Navigation from "./Navbar";

const Collection = () => {
  const {
    addToCollection,
    removeCollection,
    collection,
    collectionDir,
    loading: loadingCollection,
  } = useContext(BookCollectionContext);
  return (
    <>
      <Navigation />
      <Card>
      <Card.Header>Your Collection</Card.Header>
      {collection?.length ? (
        collection.map((doc) => {
          return (
            <Row style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
              <Col xs="2" xl="1">
                <img
                  style={{ width: "100%" }}
                  src={
                    doc.cover_i && doc.cover_i > 0
                      ? `http://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
                      : "https://openlibrary.org/images/icons/avatar_book-lg.png"
                  }
                  alt="Cover"
                />
              </Col>
              <Col>
                <Row className="book-title">{doc.title}</Row>
                <Row className="book-author">{doc.author}</Row>
                <Row className="book-desc"></Row>
              </Col>
              <Col xs="1" className="remove">
                <Row className="price"></Row>
                <Row>
                  <Button className="buttons" size="sm" active>
                    <div
                      className="small-text"
                      onClick={() => removeCollection(doc._id)}
                    >
                      {loadingCollection ? "Loading" : "Remove"}
                    </div>
                  </Button>
                </Row>
              </Col>
            </Row>
            
          );
        })
      ) : (
        <Jumbotron>No Data</Jumbotron>
      )}
      </Card>
    </>
  );
};

export default Collection;
