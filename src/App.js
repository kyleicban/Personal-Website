import React from "react";

import ArtPort from "./components/body/ArtPortfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/body/Project";
import WorkExp from "./components/body/WorkExperience";

function App() {
  return (
    //====EVENTUALLY WANT IT SO I PASS IN AN OBJECT====
    //====TO EACH SECTION AND IT FILLS IN EVERYTHING====
    <div>
      <Header />
      <WorkExp company="Enfinite Technologies" />
      <WorkExp company="PeachPay, Inc" />
      <WorkExp company="Hours" />
      <Project name="Sport Store" />
      <Project name="GPA Calculator" />
      <ArtPort />
      <Footer />
    </div>
  );
}

export default App;
