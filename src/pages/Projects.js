import React, { Component } from "react";
import styled from "styled-components";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";
import ProjectMaker from "../components/ProjectMaker";

const ProjectWrapper = styled.div`
  color: rgb(15, 8, 43);
  margin: auto;
  padding: 40px;
  width: 700px;
`;

export default class Project extends Component {
  render() {
    return (
      <PageWrapper>
        <TitleWrapper>PROJECTS</TitleWrapper>
        <ProjectWrapper>
          <ProjectMaker
            url="https://www.enfinitetech.com/"
            name="Sport Store"
          />
        </ProjectWrapper>
      </PageWrapper>
    );
  }
}
