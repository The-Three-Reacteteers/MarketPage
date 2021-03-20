import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Col, Jumbotron, Row } from "reactstrap";
import { useAuthContext } from "../../data/AuthProvider";
import { BookCollectionContext } from "../../data/BookCollectionProvider";
import Navigation from "./Navbar";

const previewUrl = function (isbn) {

  isbn = '9780198748250';

    return fetch(`"https://www.googleapis.com/books/v1/volumes?q=isbn:"${isbn}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.webReaderLink);
        return data.webReaderLink;
      })
      .catch((err) => {
        console.error(err)
      });

  }

const Collection = () => {
  const {
    removeCollection,
    collection,
    loading: loadingCollection,
  } = useContext(BookCollectionContext);
  const { user } = useAuthContext();
  return (
    <>
      <Navigation />
      <Card className="collection">
      <Card.Header>{user.firstname}'s Collection</Card.Header>
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
                {doc.isbn && <Row className="book-isbn">ISBN: {doc.isbn}</Row>}
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
        <Jumbotron>You don't have anything in your Collection! Go search for some new books!</Jumbotron>
      )}
      </Card>
    </>
  );
};

export default Collection;
