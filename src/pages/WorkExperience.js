import React, { Component } from "react";
import styled from "styled-components";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";
import WorkExpMaker from "../components/WorkExpMaker";

const WorkExpWrapper = styled.div`
  color: rgb(15, 8, 43);
  margin: auto;
  padding: 40px;
  width: 700px;
`;

export default class WorkExp extends Component {
  render() {
    //====EVENTUALLY WANT IT SO I PASS IN AN OBJECT====
    //====AND IT FILLS IN EVERYTHING====
    return (
      <PageWrapper>
        <TitleWrapper>WORK EXPERIENCE</TitleWrapper>
        <WorkExpWrapper>
          <WorkExpMaker
            url="https://peachpay.app/"
            name="PeachPay, Inc"
            location="Des Moines, IA"
            duration="August 2020 to Present"
          />
          <WorkExpMaker
            url="https://www.enfinitetech.com/"
            name="Enfinite Technologies"
            location="Houston, TX"
            duration="August 2020 to Present"
          />
        </WorkExpWrapper>
      </PageWrapper>
    );
  }
}
