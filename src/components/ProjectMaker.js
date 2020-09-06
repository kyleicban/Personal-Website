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

const CompanyLogo = styled.div`
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 50%;
  height: 150px;
  margin: 10px;
  margin-top: auto;
  margin-bottom: auto;
  width: 150px;
`;

const TextBox = styled.div`
  height: 90%;
  width: 430px;
`;

const TitleWrapper = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;

const DescWrapper = styled.li`
  font-size: 12px;
  margin-left: 0;
`;

export default class ProjectMaker extends Component {
  render() {
    return (
      <ProjectWrapper
        target="_blank"
        href={this.props.url}
        className="btn btn-light"
      >
        <CompanyLogo />
        <TextBox>
          <TitleWrapper>{this.props.name}</TitleWrapper>
          <ul className="m-0 text-left">
            {this.props.description.map((point) => (
              <DescWrapper>{point}</DescWrapper>
            ))}
          </ul>
        </TextBox>
      </ProjectWrapper>
    );
  }
}
