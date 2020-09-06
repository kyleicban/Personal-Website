import React, { Component } from "react";
import styled from "styled-components";

const WorkWrapper = styled.a`
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

const LogWrapper = styled.p`
  float: right;
  font-size: 10px;
  font-weight: lighter;
`;

const DescWrapper = styled.li`
  font-size: 12px;
  margin-left: 0;
`;

export default class WorkExpMaker extends Component {
  render() {
    return (
      <WorkWrapper
        target="_blank"
        href={this.props.url}
        className="btn btn-light"
      >
        <CompanyLogo />
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
