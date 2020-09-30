import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ArtPort from "./ArtPortfolio";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import Project from "./Projects";
import WorkExp from "./WorkExperience";

const categories = ["Work_Experience", "Projects", "Art_Portfolio"];

export default class Layout extends Component {
  render() {
    return (
      <HashRouter>
        <Header baseUrl="" categories={categories} />
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work_experience" component={WorkExp} />
            <Route path="/projects" component={Project} />
            <Route path="/art_portfolio" component={ArtPort} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </HashRouter>
    );
  }
}
