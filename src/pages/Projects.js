import React, { Component } from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  background: white;
`;

export default class Project extends Component {
  render() {
    return <ProjectWrapper>I made a {this.props.name}</ProjectWrapper>;
  }
}
