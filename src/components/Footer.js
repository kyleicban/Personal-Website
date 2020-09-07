import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background: rgb(28, 56, 94);
  box-shadow: 0 50vh 0 50vh rgb(28, 56, 94);
  color: white;
  font-weight: lighter;
  padding-top: 80px;
  position: relative;
  text-align: center;
  top: -150px;
`;

export default class Footer extends Component {
  render() {
    return <FooterWrapper>this is a footer</FooterWrapper>;
  }
}
