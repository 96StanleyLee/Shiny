import React, { useState, useEffect } from "react";
import Navbar from "./Containers/Navbar.js";
import Footer from "./Containers/Footer.js";
import "./App.css";
import HomePage from "./Containers/Home";
import SignIn from "./Containers/Register_Login";
import PageNotFound from "./Containers/404";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Axios from "axios";

function App() {


  let [homepageCards] = useState([
    {
      image: "https://i.vimeocdn.com/portrait/9601072_300x300",
      lead: "Rock Vincent Guitard",
      id: 1,
    },
    {
      image:
        "https://uploads-ssl.webflow.com/5a957661892ae800019312e9/5efc132d470fdd436f4f56ff_IMG_1879.jpg",
      lead: "Stupid Vincent Guitard",
      id: 2,
    },
  ]);

  let [user, setUser] = useState({})

  const onClickRegister = (object) =>{
    console.log(object)
    Axios.post('https://shiny-backend.herokuapp.com/users',object)
    return <Redirect to='/login' />
    // https://shiny-backend.herokuapp.com/users
  }

  
  useEffect(()=>{
    fetch("https://shiny-backend.herokuapp.com/autologin", {
    credentials: "include"
  })
    .then(r => r.json())
    .then(r=> setUser(r))
  },[])


  const onClickLogin = (object) =>{
    // Axios.post('http://localhost:4000/login',object, {withCredentials: true})
    // .then(resp => console.log(resp.data))
    console.log(object)
    fetch("https://shiny-backend.herokuapp.com/login", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },      
      body: JSON.stringify(object)
    })
    .then(r => r.json())
    .then(r => console.log(r))
    
    // https://shiny-backend.herokuapp.com/login
  }

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage homecards={homepageCards} user={user} />
          </Route>
          {/* <Route exact path = "/register">
            <Register register={onClickRegister}/>
          </Route> */}
          <Route path="/register" render={(routeProps) => <SignIn {...routeProps} register={onClickRegister} user={user}/>} />
          <Route path="/login" render={(routeProps) => <SignIn {...routeProps} login={onClickLogin} user={user}/>} />

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
