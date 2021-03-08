import React from "react";
import { Container } from "reactstrap"
import BgImage from "../../assets/images/MarketPage.png"


const SignUp = () => {
    return (
        <Container className="signup">
                <BgImage />
            <form>
                <h3 className="center-text">Register</h3>

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

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            </form>
        </Container>
    )
}

export default SignUp
