import Background from "../background";
import React, { Component } from "react";
import { Container } from "reactstrap"

export default class LoginInPage extends Component {
    render() {
        return (
            <Container className="login">
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
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </form>
            </Container>
        ); 
    }
}