import React, { Component } from "react";
import styled from "styled-components";

const ProjectWrapper = styled.a`
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 10px;
  color: rgb(15, 8, 43);
  display: flex;
  margin-bottom: 40px;
  padding: 10px;
  position: relative;
  transition: 0.5s;
  width: 100%;

  &:hover {
    color: rgb(15, 8, 43);
    text-decoration: none;

    -moz-box-shadow: 0px 0px 10px 3px #ccc;
    -webkit-box-shadow: 0px 0px 10px 3px #ccc;
    box-shadow: 0px 0px 10px 3px rgb(110, 110, 110);
  }

  @media only screen and (max-width: 810px) {
    flex-direction: column;
  }
`;

const ProjectLogo = styled.div`
  background: url(${(props) => props.logo}) no-repeat;
  background-position: center;
  background-size: auto 100px;
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 50%;
  height: 150px;
  margin: 10px;
  margin-top: auto;
  margin-bottom: auto;
  width: 150px;

  @media only screen and (max-width: 810px) {
    margin: auto;
  }
  @media only screen and (max-width: 480px) {
    background-size: auto 50px;
    height: 90px;
    width: 90px;
  }
`;

const TextBox = styled.div`
  height: 90%;
  width: 430px;

  @media only screen and (max-width: 810px) {
    margin: auto;
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    width: 98%;
  }
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
      <ProjectWrapper target="_blank" href={this.props.url}>
        <ProjectLogo logo={this.props.logo} />
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
