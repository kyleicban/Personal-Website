import React, { Component } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import Academia from "./Academia";
import Industry from "./Industry";

import { PageWrapper, TitleWrapper } from "../../components/PageWrapper";
import WorkExpMaker from "../../components/WorkExpMaker";
import { WorkExpList } from "../../data/data";

const WorkExpWrapper = styled.div`
  color: rgb(15, 8, 43);
  margin: auto;
  padding: 40px;
  width: 700px;

  @media only screen and (max-width: 950px) {
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    width: 98%;
  }
`;

const ExpLinkWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 700px;

  @media only screen and (max-width: 950px) {
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    width: 98%;
  }
`;

const LinkHeader = styled.a`
  color: rgb(15, 8, 43);
  font-size: 30px;
  margin: auto;
`;

export default class WorkExp extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 280,
      left: 100,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <PageWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <TitleWrapper>WORK EXPERIENCE</TitleWrapper>
          <ExpLinkWrapper>
            <HashRouter>
              <Link to="/work_experience/industry">
                <LinkHeader>Industry</LinkHeader>
              </Link>
              <Link to="/work_experience/academia">
                <LinkHeader>Academia</LinkHeader>
              </Link>
            </HashRouter>
          </ExpLinkWrapper>
          <HashRouter>
            <Switch>
              <Route path="/work_experience/industry" component={Industry}/>
              <Route path="/work_experience/academia" component={Industry}/>
            </Switch>
          </HashRouter>
        </motion.div>
      </PageWrapper>
    );
  }
}
