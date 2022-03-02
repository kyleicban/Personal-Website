import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ArtPort from "./ArtPortfolio";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import Experience from "./Experience.js";
import Resume from "./Resume";

const categories = ["Work_Experience", "Design_+_Art_Portfolio", "Resume"];

export default class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <Header baseUrl="" categories={categories} />
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work_experience" component={Experience} />
            <Route path="/design_and_art_portfolio" component={ArtPort} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </HashRouter>
    );
  }
}
