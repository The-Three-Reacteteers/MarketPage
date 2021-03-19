import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Col, Jumbotron, Row } from "reactstrap";
import { BookWishlistContext } from "../../data/BookWishlistProvider";
import Navigation from "./Navbar";

const Wishlist = () => {
  const {
    addToWishlist,
    removeWishlist,
    wishlist,
    wishlistDir,
    loading: loadingWishlist,
  } = useContext(BookWishlistContext);
  return (
    <>
      <Navigation />
      {wishlist?.length ? wishlist.map((doc) => (
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
            <Row className="book-desc"></Row>
          </Col>
            <Col xs="2" className="remove">
              <Row className="price"></Row>
              <Row>
                <Button className="buttons" size="sm" active>
                  <div
                    className="small-text"
                    onClick={() =>
                      removeWishlist(doc._id)
                    }
                  >
                    {loadingWishlist
                      ? "Loading"
                      : "Remove"}
                  </div>
                </Button>
              </Row>
            </Col>
        </Row>
      )):(
          <Jumbotron>No Data</Jumbotron>
      )}
    </>
  );
};

export default Wishlist;
