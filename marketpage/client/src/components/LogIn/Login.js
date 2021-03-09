import React from 'react'
import BgImage from "../../assets/images/MarketPage.png"
import { Container } from "reactstrap"

const Login = () => {
    return (
        <Container className="login">
                <BgImage />
            <form>
                <h3 className="center-text">Log in</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </form>
            </Container>
    )
}

export default Login
