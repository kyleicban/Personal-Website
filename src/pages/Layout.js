import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

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
      //====EVENTUALLY WANT IT SO I PASS IN AN OBJECT====
      //====TO EACH SECTION AND IT FILLS IN EVERYTHING====
      <HashRouter>
        <Header baseUrl="" categories={categories} />
        <Route path="/" exact component={Home} />
        <Route path="/work_experience" component={WorkExp} />
        <Route path="/projects" component={Project} />
        <Route path="/art_portfolio" component={ArtPort} />
        <Footer />
      </HashRouter>
    );
  }
}
