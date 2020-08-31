import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordRepeat, setPasswordRepeat] = useState("");

  let {login, register} = props


  return (
    <div className="section register">
      <div className="container">
        {props.match.path === '/register'? 
        <>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        </>
        :
        <> 
        <h1>Login</h1>
        <p>Please fill in this form to login.</p></>}
        

        <label htmlFor="email">
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
        <label htmlFor="psw">
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
        <label htmlFor="psw-repeat">
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

        {props.match.path === '/register'?
        <button
        type="submit"
        className="registerbtn"
        onClick={() =>
          register({ firstName, lastName, email, password, passwordRepeat })
        }
      >
        Register
      </button>
      :
      <button
          type="submit"
          className="registerbtn"
          onClick={() =>
            login()
          }
        >
          Login
        </button>}
        
      </div>

      <div className="container signin">
        <p>
          Already have an account? <a href="#">Sign in</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;
