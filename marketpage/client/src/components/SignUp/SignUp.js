import React, { useState } from "react";
import { Container } from "reactstrap";
import { useAuthContext } from "../../data/AuthProvider";
import "./SignUp.css";

const SignUp = () => {
  const { loading, signup } = useAuthContext();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container className="signup">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          signup(firstname, lastname, email, password);
        }}
      >
        <h3 className="center-text">Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            value={firstname}
            onChange={(ev) => setFirstname(ev.target.value)}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            value={lastname}
            onChange={(ev) => setLastname(ev.target.value)}
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
            required
            disabled={loading}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
            required
            disabled={loading}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="btn btn-dark btn-lg btn-block"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </Container>
  );
};

export default SignUp;
