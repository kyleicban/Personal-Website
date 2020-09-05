import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background: blue;
`;

export default class Footer extends Component {
  render() {
    return <FooterWrapper>This is a Footer</FooterWrapper>;
  }
}
