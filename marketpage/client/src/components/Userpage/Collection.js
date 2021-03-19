import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Col, Jumbotron, Row } from "reactstrap";
import { BookCollectionContext } from "../../data/BookCollectionProvider";
import Navigation from "./Navbar";

/*
function getBookDetails(isbn) {

  // Query the book database by ISBN code.
  isbn = isbn || "9781451648546"; // Steve Jobs book

  var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;

  var response = UrlFetchApp.fetch(url);
  var results = JSON.parse(response);

  if (results.totalItems) {

    // There'll be only 1 book per ISBN
    var book = results.items[0];

    var title = (book["volumeInfo"]["title"]);
    var subtitle = (book["volumeInfo"]["subtitle"]);
    var authors = (book["volumeInfo"]["authors"]);
    var printType = (book["volumeInfo"]["printType"]);
    var pageCount = (book["volumeInfo"]["pageCount"]);
    var publisher = (book["volumeInfo"]["publisher"]);
    var publishedDate = (book["volumeInfo"]["publishedDate"]);
    var webReaderLink = (book["accessInfo"]["webReaderLink"]);

    // For debugging
    console.log(book);

  }

}
*/

const Collection = () => {
  const {
    removeCollection,
    collection,
    loading: loadingCollection,
  } = useContext(BookCollectionContext);
  return (
    <>
      <Navigation />
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
              <Col xs="7" xl="8">
                <Row className="book-title">{doc.title}</Row>
                <Row className="book-author">{doc.author}</Row>
                {doc.isbn && <Row className="book-isbn">ISBN: {doc.isbn}</Row>}
              </Col>
              <Col xs="2" className="remove">
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
    </>
  );
};

export default Collection;
