import React, { useState } from "react";
import Navbar from "./Containers/Navbar.js";
import Footer from "./Containers/Footer.js";
import "./App.css";
import HomePage from "./Containers/Home";
import SignIn from "./Containers/Register_Login";
import PageNotFound from "./Containers/404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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


  const onClickRegister = (object) =>{
    console.log(object)
    Axios.post('https://shiny-backend.herokuapp.com/users',object)
  }


  const onClickLogin = (object) =>{
    let user = Axios.post('https://shiny-backend.herokuapp.com/login',object,{withCredentials: true})
    console.log(user)
  }

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage homecards={homepageCards} />
          </Route>
          {/* <Route exact path = "/register">
            <Register register={onClickRegister}/>
          </Route> */}
          <Route path="/register" render={(routeProps) => <SignIn {...routeProps} register={onClickRegister}/>} />
          <Route path="/login" render={(routeProps) => <SignIn {...routeProps} login={onClickLogin} />} />

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
