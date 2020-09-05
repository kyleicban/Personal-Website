import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background: rgb(28, 56, 94);
  padding-bottom: 100px;
`;

export default class Footer extends Component {
  render() {
    return <FooterWrapper>This is a Footer</FooterWrapper>;
  }
}
