import React, { Component } from "react";
import styled from "styled-components";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";
import ProjectMaker from "../components/ProjectMaker";
import { ProjectList } from "../data/data";

const ProjectWrapper = styled.div`
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

export default class Project extends Component {
  render() {
    return (
      <PageWrapper>
        <TitleWrapper>PROJECTS</TitleWrapper>
        <ProjectWrapper>
          {ProjectList.map((proj) => {
            return (
              <ProjectMaker
                name={proj.name}
                logo={proj.logo}
                url={proj.url}
                description={proj.description}
              />
            );
          })}
        </ProjectWrapper>
      </PageWrapper>
    );
  }
}
