import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Container, Col, Row } from "reactstrap";
import { BookSearchContext } from "../../data/BookSearchProvider";
import "./Search.css";

const Search = () => {
  const [title, setTitle] = useState("");
  const [isbn, setISBN] = useState("");
  const [author, setAuthor] = useState("");
  const { books, loading, search } = useContext(BookSearchContext);
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
                <label>Search by ISPN:</label>
                <input
                  type="text"
                  value={isbn}
                  onChange={(ev) => setISBN(ev.target.value)}
                  className="form-control"
                  placeholder="ISPN"
                />
              </div>
              <Button
                onClick={() => search({ author, title, isbn })}
                className="buttons-center"
                size="sm"
              >
                <div className="small-text">Search</div>
              </Button>
            </Col>
          </Row>
        </form>
      </Card>
      {loading ? (
        "Loading.."
      ) : (
        <Card className="search-cards">
          <Card.Header>
            <h3>Search Results ({books?.docs?.length})</h3>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {books?.docs.map((doc) => (
                <Row style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
                  <Col xs="2">
                    <img
                    style={{width: "100%"}}
                      src={
                        (doc.cover_i && doc.cover_i>0)
                          ? `http://covers.openlibrary.org/b/id/${doc.cover_i}-S.jpg`
                          : "https://openlibrary.org/images/icons/avatar_book-sm.png"
                      }
                      alt="Cover"
                    />
                  </Col>
                  <Col xs="7">
                    <Row className="book-title">{doc.title}</Row>
                    <Row className="book-author">{doc.author_name}</Row>
                    <Row className="book-desc"></Row>
                  </Col>
                  <Col xs="2" className="remove">
                    <Row className="price"></Row>
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
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Search;
