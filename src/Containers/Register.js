import React from "react";

const Register = () => {
  return (
    <div className="section register">
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <label for="email">
          <b>Email</b>
        </label>{" "}
        <br />
        <input
          className="mb2"
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />{" "}
        <br />
        <label for="psw">
          <b>Password</b>
        </label>
        <br />
        <input
          className="mb2"
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        />{" "}
        <br />
        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <br />
        <input
          className="mb2"
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          required
        />{" "}
        <br />
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms &amp; Privacy</a>.
        </p>
        <button type="submit" class="registerbtn">
          Register
        </button>
      </div>

      <div class="container signin">
        <p>
          Already have an account? <a href="#">Sign in</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;
