import React, { Component } from "react";
import styled from "styled-components";

const ArtPortWrapper = styled.div`
  background: white;
`;

export default class ArtPort extends Component {
  render() {
    return <ArtPortWrapper>This is my ArtPort</ArtPortWrapper>;
  }
}
