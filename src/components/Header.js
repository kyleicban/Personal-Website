import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: blue;
  padding: 5px;
  text-align: right;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HashRouter>
          <Link to={this.props.baseUrl} className="btn btn-primary m-1">
            Home
          </Link>
          {this.props.categories &&
            this.props.categories.map((cat) => (
              <Link to={cat.toLowerCase()} className="btn btn-primary m-1">
                {cat.replace(/_/g, " ")}
              </Link>
            ))}
        </HashRouter>
      </HeaderWrapper>
    );
  }
}
