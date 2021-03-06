import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Col, Row, Jumbotron } from "reactstrap";
import { BookSearchContext } from "../../data/BookSearchProvider";
import { BookCollectionContext } from "../../data/BookCollectionProvider";
import { BookWishlistContext } from "../../data/BookWishlistProvider";

import "./Search.css";
import { useAuthContext } from "../../data/AuthProvider";

const Search = () => {
  const [title, setTitle] = useState("");
  const [isbn, setISBN] = useState("");
  const [author, setAuthor] = useState("");
  const { books, loading, search } = useContext(BookSearchContext);
  const { user } = useAuthContext();
  const {
    addToCollection,
    removeCollection,
    collectionDir,
    loading: loadingCollection,
  } = useContext(BookCollectionContext);
  const {
    addToWishlist,
    removeWishlist,
    wishlistDir,
    loading: loadingWishlist,
  } = useContext(BookWishlistContext);

  return (
    <>
      <Card className="search-cards">
        <form>
          <Card.Header>
            <h3>Search for a Book</h3>
          </Card.Header>
          <Row className="search-bar">
            <Col>
              <div className="form-group">
                <label>Search by Book Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(ev) => setTitle(ev.target.value)}
                  className="form-control"
                  placeholder="Book Title"
                />
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <label>Search by Author Name:</label>
                <input
                  type="text"
                  value={author}
                  onChange={(ev) => setAuthor(ev.target.value)}
                  className="form-control"
                  placeholder="Author Name"
                />
              </div>
            </Col>
            <Col>
              <div className="form-group">
                <label>Search by ISBN:</label>
                <input
                  type="text"
                  value={isbn}
                  onChange={(ev) => setISBN(ev.target.value)}
                  className="form-control"
                  placeholder="ISBN"
                />
              </div>
            </Col>
          </Row>
          <Row>
              <Button
                onClick={() => search({ author, title, isbn })}
                className="buttons-center"
                size="sm"
              >
                <div className="small-text">Search</div>
              </Button>
          </Row>
        </form>
      </Card>
      <Card className="search-cards">
        <Card.Header>
          <h3>Search Results ({books?.docs?.length})</h3>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {books?.docs?.length ? (
              books.docs.map((doc) => {
                const isInCollection = collectionDir && collectionDir[doc.key];
                const isInWishlist = wishlistDir && wishlistDir[doc.key];
                const isbn = doc.isbn && doc.isbn[0];
                const desc = doc.first_sentence?.join("\n");
                // collectionDir?.cover[doc.cover_i] ||
                // collectionDir?.isbn[doc.isbn];
                return (
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
                      <Row className="book-author">{doc.author_name}</Row>
                      {isbn && <Row className="book-isbn">ISBN: {isbn}</Row>}
                      {desc && <Row className="book-desc">First sentence: </Row>}{desc && <Row>"{desc}"</Row>}

                    </Col>
                    {user && (
                      <Col xs="1" className="remove">
                        <Row>
                          <Button className="buttons" size="sm" active>
                            <div
                              className="small-text"
                              onClick={() =>
                                isInCollection
                                  ? removeCollection(isInCollection._id)
                                  : addToCollection(doc)
                              }
                            >
                              {loadingCollection
                                ? "Loading"
                                : isInCollection
                                ? "Remove From Collection"
                                : "Add to Collection"}
                            </div>
                          </Button>
                        </Row>
                        <Row>
                          <Button className="buttons space" size="sm">
                            <div
                              className="small-text"
                              onClick={() =>
                                isInWishlist
                                  ? removeWishlist(isInWishlist._id)
                                  : addToWishlist(doc)
                              }
                            >
                              {loadingWishlist
                                ? "Loading"
                                : isInWishlist
                                ? "Remove From Wishlist"
                                : "Add to Wishlist"}
                            </div>
                          </Button>
                        </Row>
                      </Col>
                    )}
                  </Row>
                );
              })
            ) : (
              <Jumbotron>{loading ? "Loading.." : "No books to display"}</Jumbotron>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );

};

export default Search;
