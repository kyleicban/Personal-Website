import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: blue;
`;

export default class Header extends Component {
  render() {
    return <HeaderWrapper>This is a Header</HeaderWrapper>;
  }
}
