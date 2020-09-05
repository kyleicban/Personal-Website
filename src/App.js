import React, { Component } from "react";
import { IndexRoute } from "react-router";
import { Route, HashRouter } from "react-router-dom";

import ArtPort from "./components/body/ArtPortfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/body/Project";
import WorkExp from "./components/body/WorkExperience";

export default class App extends Component {
  render() {
    return (
      //====EVENTUALLY WANT IT SO I PASS IN AN OBJECT====
      //====TO EACH SECTION AND IT FILLS IN EVERYTHING====
      <div>
        <Header baseUrl="" categories={this.props.categories} />
        <WorkExp company="Enfinite Technologies" />
        <WorkExp company="PeachPay, Inc" />
        <WorkExp company="Hours" />
        <Project name="Sport Store" />
        <Project name="GPA Calculator" />
        <ArtPort />
        <Footer />

        <HashRouter>
          <Route path="/" component={WorkExp}></Route>
          <Route path="projects" component={Project}></Route>
          <Route path="art-portfolio" component={ArtPort}></Route>
        </HashRouter>
      </div>
    );
  }
}
