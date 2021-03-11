import React from 'react'
import { Container, Row, Col } from "reactstrap"
import "./Homepage.css"
import {Card, CardDeck, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Homepage = () => {
    let bookTitle = "Book Title"
    let author = "Author"
    return (
        <>
    <Container fluid className="bkg-blk" >
        <Row className="mx-auto" >
            <Col md={4} className="">
                <Card className="bg-dark text-white">
                    <Card.Img alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col>
                <Row className="inline-block">
                    <Col md={4} className="">
                        <Card className="bg-dark text-white sidepost-con">
                            <Card.Img alt={bookTitle} className="sidepost-con" src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row className="inline-block">
                    <Col md={4} className="sidepost-con">
                        <Card className="bg-dark text-white sidepost-con">
                            <Card.Img className="sidepost-con" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row className="inline-block">
                    <Col md={4} className="sidepost-con">
                        <Card className="bg-dark text-white sidepost-con">
                            <Card.Img className="sidepost-con" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>

        <br></br>
        <Row><Col><h1 className="mt-4 mb-4 text-white genre-fz" >Highest Rated</h1></Col></Row>

    <CardDeck className="ml-5 mr-5">
        <Card className="border-0" >
    <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
        <Card.Body className="bkg-blk">
        <Card.Title> <Link className="text-white" >{bookTitle}</Link></Card.Title>
        <Card.Text>
        <Link className="text-white" >
        {author}
        </Link>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="border-0" >
    <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
        <Card.Body className="bkg-blk">
        <Card.Title> <Link className="text-white" >{bookTitle}</Link></Card.Title>
        <Card.Text>
        <Link className="text-white" >
        {author}
        </Link>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="hide-xs border-0" >
    <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
        <Card.Body className="bkg-blk">
        <Card.Title> <Link className="text-white" >{bookTitle}</Link></Card.Title>
        <Card.Text>
        <Link className="text-white" >
        {author}
        </Link>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="hide-sm border-0" >
    <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
        <Card.Body className="bkg-blk">
        <Card.Title> <Link className="text-white" >{bookTitle}</Link></Card.Title>
        <Card.Text>
        <Link className="text-white" >
        {author}
        </Link>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="hide-sm border-0" >
    <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
        <Card.Body className="bkg-blk">
        <Card.Title> <Link className="text-white" >{bookTitle}</Link></Card.Title>
        <Card.Text>
        <Link className="text-white" >
        {author}
        </Link>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="hide-md border-0" >
    <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
        <Card.Body className="bkg-blk">
        <Card.Title> <Link className="text-white" >{bookTitle}</Link></Card.Title>
        <Card.Text>
        <Link className="text-white" >
        {author}
        </Link>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="hide-lg border-0" >
    <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
        <Card.Body className="bkg-blk">
        <Card.Title> <Link className="text-white" >{bookTitle}</Link></Card.Title>
        <Card.Text>
        <Link className="text-white" >
        {author}
        </Link>
        </Card.Text>
        </Card.Body>
    </Card>
    <Card className="hide-xl border-0" >
    <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
        <Card.Body className="bkg-blk">
        <Card.Title><Link className="text-white" >{bookTitle}</Link></Card.Title>
        <Card.Text>
        <Link className="text-white" >
        {author}
        </Link>
        </Card.Text>
        </Card.Body>
    </Card>
    </CardDeck>
</Container>
    <br></br>
    <Row><Col><h1 className="mt-4 mb-4 ml-4 genre-fz" >Recent Uploads</h1></Col></Row>
    {/*---------- Books Row One ----------*/}
    <CardDeck className="ml-5 mr-5">
    <Card className="border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-xs border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-sm border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-sm border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-md border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-lg border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-xl border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title><Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    <br></br>
    {/*---------- Books Row Two ----------*/}
    <CardDeck className="ml-5 mr-5">
    <Card className="border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-xs border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-sm border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-sm border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-md border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-lg border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-xl border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title><Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    <br></br>
    <Container fluid className="bkg-blk pt-4 pb-4" >
        <Row><Col className="d-flex justify-content-end"><p className="text-white p-mb position-relative" >Don't forget to sign in and make your own collection!</p></Col><Col><Button variant="light">Register</Button></Col></Row>
    </Container>
    <br></br>
    <br></br>
    <Row><Col><h1 className="mt-4 mb-4 ml-4 genre-fz" >Books you might like</h1></Col></Row>
    {/*---------- Books Row Three ----------*/}
    <CardDeck className="ml-5 mr-5">
    <Card className="border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-xs border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-sm border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-sm border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-md border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-lg border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-xl border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title><Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    <br></br>
    {/*---------- Books Row Four ----------*/}
    <CardDeck className="ml-5 mr-5">
    <Card className="border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-xs border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-sm border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-sm border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-md border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-lg border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title> <Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="hide-xl border-0" >
  <Link><Card.Img variant="top" alt={bookTitle} src="https://cdn.wallpapersafari.com/3/57/r2K0SO.jpg"/></Link>
    <Card.Body>
      <Card.Title><Link className="text-dark" >{bookTitle}</Link></Card.Title>
      <Card.Text>
    <Link className="text-dark" >
      {author}
    </Link>
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
    </>
    )
}

export default Homepage
