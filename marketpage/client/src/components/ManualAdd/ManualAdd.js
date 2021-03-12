import { Container } from "reactstrap";
import "./ManualAdd.css"

const ManualAdd = () => {
    return (
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

                <button type="submit" className="btn btn-dark btn-lg btn-block">Add Book</button>
            </form>
        </Container>
    )
}

export default ManualAdd