import React, { Component } from "react";
import styled from "styled-components";

const WorkExpWrapper = styled.div`
  background: white;
`;

export default class WorkExp extends Component {
  render() {
    //====EVENTUALLY WANT IT SO I PASS IN AN OBJECT====
    //====AND IT FILLS IN EVERYTHING====
    return <WorkExpWrapper>I worked at {this.props.company}</WorkExpWrapper>;
  }
}
