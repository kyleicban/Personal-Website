import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";
import WorkExpMaker from "../components/WorkExpMaker";
import { WorkExpList } from "../data/data";

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

export default class WorkExp extends Component {
  render() {
    //====EVENTUALLY WANT IT SO I PASS IN AN OBJECT====
    //====AND IT FILLS IN EVERYTHING====
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
          <WorkExpWrapper>
            {WorkExpList.map((workExp) => {
              return (
                <WorkExpMaker
                  name={workExp.name}
                  logo={workExp.logo}
                  position={workExp.position}
                  location={workExp.location}
                  duration={workExp.duration}
                  url={workExp.url}
                  description={workExp.description}
                />
              );
            })}
          </WorkExpWrapper>
        </motion.div>
      </PageWrapper>
    );
  }
}
