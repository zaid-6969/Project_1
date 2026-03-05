import React from "react";
import "../auth.form.scss";
import { Link } from "react-router";

const Register = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
            />
          </div>

          <button type="submit">Register</button>

          <p className="auth-switch">
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;