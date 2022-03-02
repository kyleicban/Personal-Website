import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";
import ExperienceMaker from "../components/ExperienceMaker";
import { WorkExpList, VolunteerExpList } from "../data/data";
import { LineBreak } from "../shared/LineBreak";

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

export default class Experience extends Component {
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
          <WorkExpWrapper>
            {WorkExpList.map((workExp) => {
              return (
                <ExperienceMaker
                  name={workExp.name}
                  logo={workExp.logo}
                  location={workExp.location}
                  url={workExp.url}
                  positions={workExp.positions}
                />
              );
            })}
          </WorkExpWrapper>
          <LineBreak />
          <TitleWrapper>VOLUNTEERING</TitleWrapper>
          <WorkExpWrapper>
            {VolunteerExpList.map((volunteerExp) => {
              return (
                <ExperienceMaker
                  name={volunteerExp.name}
                  logo={volunteerExp.logo}
                  location={volunteerExp.location}
                  url={volunteerExp.url}
                  positions={volunteerExp.positions}
                />
              );
            })}
          </WorkExpWrapper>

        </motion.div>
      </PageWrapper>
    );
  }
}
