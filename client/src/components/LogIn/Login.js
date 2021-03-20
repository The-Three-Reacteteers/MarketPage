import React, { useState } from "react";
import { Container } from "reactstrap";
import { useAuthContext } from "../../data/AuthProvider";
import "./Login.css";

const LogIn = () => {
  const { loading, login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container className="login">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          login(email, password);
        }}
      >
        <h3 className="center-text">Log in</h3>
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
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>
    </Container>
  );
};

export default LogIn;
