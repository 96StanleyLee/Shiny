import React, {useState} from "react";
import axios from 'axios';


const Register = ({register}) => {

  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [passwordRepeat, setPasswordRepeat] = useState('')

  

  


  return (
    <div className="section register">
      <div className="container">
        <h1>Register</h1>

        <p>Please fill in this form to create an account.</p>


        <label for="firstname">
          <b>First Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          id="firstname"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          required
        />
        
        <br></br>

        <label for="lastname">
          <b>Last Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          id="lastname"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
          required
        />
        <br></br>


        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <br></br>

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="psw"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <br></br>

        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="passwordRepeat"
          id="psw-repeat"
          value={passwordRepeat}
          onChange={(e)=>setPasswordRepeat(e.target.value)}
          required
        />
        <br></br>

        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms &amp; Privacy</a>.
        </p>
        <button type="submit" class="registerbtn" onClick={()=>register({firstName, lastName, email, password, passwordRepeat})}>
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
