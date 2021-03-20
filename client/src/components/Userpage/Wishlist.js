import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Col, Jumbotron, Row } from "reactstrap";
import { useAuthContext } from "../../data/AuthProvider";
import { BookWishlistContext } from "../../data/BookWishlistProvider";
import Navigation from "./Navbar";

const Wishlist = () => {
  const { user } = useAuthContext();
  const {
    removeWishlist,
    wishlist,
    loading: loadingWishlist,
  } = useContext(BookWishlistContext);
  return (
    <>
      <Navigation />
      <Card className="wishlist">
        <Card.Header>{user.firstname}'s Wishlist</Card.Header>
      {wishlist?.length ? wishlist.map((doc) => (
        <Row style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
          <Col xs="2" xl="1">
            <img
              style={{ width: "100%" }}
              src={
                doc.cover_i && doc.cover_i > 0
                  ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
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
          <Jumbotron>You don't have anything in your Wishlist! Go search for some new books!</Jumbotron>
      )}
      </Card>
    </>
  );
};

export default Wishlist;
