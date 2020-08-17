import React, { useState } from "react";
import Navbar from "./Containers/Navbar.js";
import Footer from "./Containers/Footer.js";
import "./App.css";
import HomePage from "./Containers/Home";
import Register from "./Containers/Register";
import PageNotFound from "./Containers/404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Register />
            <HomePage homecards={homepageCards} />
            <Footer />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
