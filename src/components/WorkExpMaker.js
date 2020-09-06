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
          <h3 className="text-left">
            {this.props.name}
            <h6 className="float-right">
              {this.props.location}
              <br />
              {this.props.duration}
            </h6>
          </h3>
          <h5 className="m-3 text-left">
            <ul>
              <li>Blah</li>
              <li>Blah</li>
              <li>Blah</li>
            </ul>
          </h5>
        </TextBox>
      </WorkWrapper>
    );
  }
}
