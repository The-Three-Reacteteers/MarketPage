import { useState } from "react";
import { Container, Col } from "reactstrap";
import Toast from 'react-bootstrap/Toast'
import { Button } from "react-bootstrap"
import "./ManualAdd.css";
import Navigation from "../Userpage/Navbar"


const ManualAdd = () => {
    const [show, setShow] = useState(false);
    return (
        <>
        <Navigation />
        <Container className="manual">
            <form>
                <h3 className="center-text">Manually Add A Book</h3>
                <div className="form-group">
                    <label>Book Title</label>
                    <input type="text" className="form-control" placeholder="Book Title" />
                </div>

                <div className="form-group">
                    <label>Author Name</label>
                    <input type="text" className="form-control" placeholder="Author Name" />
                </div>

                <div className="form-group">
                    <label>Book Description</label>
                    <textarea className="form-control" placeholder="Book Description" />
                </div>

                <div className="form-group">
                    <label>Book Cost</label>
                    <input type="text" className="form-control" placeholder="Book Cost" />
                </div>
                    <Col>
                        <Button size="large" className="buttons fit" onClick={() => setShow(true)}>Add Book</Button>
                    </Col>
                    <Col xs=".5">
                        <Toast className="toast-center" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header>
                                <img0
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                                />
                                <strong className="mr-auto">Book Added</strong>
                                <small>Just Now</small>
                            </Toast.Header>
                            <Toast.Body>Book added successfully!</Toast.Body>
                        </Toast>
                    </Col>
            </form>
            </Container>
        </>
    )
}

export default ManualAdd