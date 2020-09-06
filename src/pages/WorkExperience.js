import React, { Component } from "react";
import styled from "styled-components";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";

const WorkExpWrapper = styled.div`
  color: rgb(15, 8, 43);
  margin: auto;
  padding-bottom: 40px;
  padding: 40px;
  width: 600px;
`;

const TestWork = styled.a`
  background: red;
  color: rgb(15, 8, 43);
  margin: auto;
  margin-bottom: 40px;
  position: absolute;
  width: 100%;
`;

export default class WorkExp extends Component {
  render() {
    //====EVENTUALLY WANT IT SO I PASS IN AN OBJECT====
    //====AND IT FILLS IN EVERYTHING====
    return (
      <PageWrapper>
        <TitleWrapper>WORK EXPERIENCE</TitleWrapper>
        <WorkExpWrapper>
          <div className="card m-1 p-1">
            <TestWork
              target="_blank"
              href="https://www.google.com/webhp?authuser=1"
              className="btn btn-light"
            >
              Google
            </TestWork>
          </div>
          <div className="card m-1 p-1">
            <TestWork
              target="_blank"
              href="https://www.google.com/webhp?authuser=1"
              className="btn btn-light"
            >
              Google
            </TestWork>
          </div>
          <div className="card m-1 p-1">
            <TestWork
              target="_blank"
              href="https://www.google.com/webhp?authuser=1"
              className="btn btn-light"
            >
              Google
            </TestWork>
          </div>
        </WorkExpWrapper>
      </PageWrapper>
    );
  }
}
