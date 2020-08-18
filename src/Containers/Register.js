import React, { useState } from "react";
import axios from "axios";

const Register = ({ register }) => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordRepeat, setPasswordRepeat] = useState("");

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <label for="psw">
          <b>Password</b>
        </label>
        <br />
        <input
          className="mb2"
          type="password"
          placeholder="Enter Password"
          name="password"
          id="psw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <br />
        <input
          className="mb2"
          type="password"
          placeholder="Repeat Password"
          name="passwordRepeat"
          id="psw-repeat"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
          required
        />
        <br></br>
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms &amp; Privacy</a>.
        </p>
        <button
          type="submit"
          class="registerbtn"
          onClick={() =>
            register({ firstName, lastName, email, password, passwordRepeat })
          }
        >
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
