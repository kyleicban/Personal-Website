import React, { Component } from "react";
import styled from "styled-components";

const WorkWrapper = styled.a`
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

const CompanyLogo = styled.div`
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

  @media only screen and (max-width: 950px) {
    margin: auto;
  }
`;

const TextBox = styled.div`
  height: 90%;
  width: 430px;

  @media only screen and (max-width: 950px) {
    width: 90%;
  }
`;

const TitleWrapper = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;

const LogWrapper = styled.p`
  float: right;
  font-size: 10px;
  font-weight: lighter;
  margin-left: 5px;
`;

const DescWrapper = styled.li`
  font-size: 12px;
  margin-left: 0;
`;

export default class WorkExpMaker extends Component {
  render() {
    return (
      <WorkWrapper target="_blank" href={this.props.url}>
        <CompanyLogo logo={this.props.logo} />
        <TextBox>
          <TitleWrapper>
            {this.props.name}
            <LogWrapper>
              {this.props.location}
              <br />
              {this.props.duration}
            </LogWrapper>
            <h6>{this.props.position}</h6>
          </TitleWrapper>
          <ul className="m-0 text-left">
            {this.props.description.map((point) => (
              <DescWrapper>{point}</DescWrapper>
            ))}
          </ul>
        </TextBox>
      </WorkWrapper>
    );
  }
}
