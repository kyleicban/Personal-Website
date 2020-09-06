import React, { Component } from "react";
import styled from "styled-components";

const ProjectWrapper = styled.a`
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 10px;
  color: rgb(15, 8, 43);
  display: flex;
  margin-bottom: 40px;
  position: relative;
  width: 100%;
`;

const ProjectLogo = styled.div`
  background: red;
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 50%;
  height: 150px;
  margin: 10px;
  width: 150px;
`;

const TextBox = styled.div`
  background: yellow;
  height: 150px;
  margin: 10px;
  width: 430px;
`;

export default class ProjectMaker extends Component {
  render() {
    return (
      <ProjectWrapper
        target="_blank"
        href={this.props.url}
        className="btn btn-light"
      >
        <ProjectLogo />
        <TextBox>
          <h3 className="text-left">{this.props.name}</h3>
          <h5 className="m-3 text-left">
            <ul>
              <li>Blah</li>
              <li>Blah</li>
              <li>Blah</li>
            </ul>
          </h5>
        </TextBox>
      </ProjectWrapper>
    );
  }
}
