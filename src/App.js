import React from "react";
import Navbar from "./Containers/Navbar.js";
import Footer from "./Containers/Footer.js";
import "./App.css";
import HomePage from "./Containers/Home";
import PageNotFound from "./Containers/404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
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
