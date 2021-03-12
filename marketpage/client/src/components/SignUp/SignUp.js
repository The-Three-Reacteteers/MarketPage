import React from "react";
import { Container } from "reactstrap";
import "./SignUp.css";
// import BgImage from "../../assets/MarketPage.png"


const SignUp = () => {
    return (
        <Container className="signup">
                {/* <BgImage /> */}
            <form>
                <h3 className="center-text">Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
            </form>
        </Container>
    )
}

export default SignUp
