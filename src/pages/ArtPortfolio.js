import React, { Component } from "react";
import styled from "styled-components";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";

const ArtPortWrapper = styled.div`
  color: rgb(15, 8, 43);
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 10px;
  margin: auto;
  padding: 40px;
  padding-bottom: 60px;
  width: 700px;
`;

export default class ArtPort extends Component {
  render() {
    return (
      <PageWrapper>
        <TitleWrapper>ART PORTFOLIO</TitleWrapper>
        <ArtPortWrapper>
          they're good i promise... just take my word for it for now :')
        </ArtPortWrapper>
      </PageWrapper>
    );
  }
}
