import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import styled from "styled-components";

import mainpic from "../assets/me1.jpg";
import hoverpic from "../assets/me2.jpg";

const HeaderWrapper = styled.div`
  background: rgb(28, 56, 94);
  color: white;
  font-weight: lighter;
  margin: 0;
  padding: 5px;
  padding-bottom: 60px;
  width: 100%;
`;

const NavWrapper = styled.div`
  margin: 0;
  text-align: right;
  width: 100%;
`;

const BtnTextWrapper = styled.p`
  color: rgb(28, 56, 94);
  font-size: 16px;
  margin: 0;
`;

const BottomWrapper = styled.div`
  display: flex;
  margin: 0;
`;

const TextWrapper = styled.div`
  font-size: 36px;
  margin: 0;
  width: 50%;
`;

const ProfileWrapper = styled.div`
  color: black;
  height: 250px;
  margin: 0;
  width: 50%;
`;

const ProfPic = styled.div`
  background-image: url(${mainpic});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  border: 5px solid white;
  border-radius: 50%;
  height: 250px;
  margin: 25px;
  position: absolute;
  top: 8%;
  transition: 0.5s;
  right: 0%;
  width: 250px;

  -moz-box-shadow: 0px 5px 10px 10px #ccc;
  -webkit-box-shadow: 0px 5px 10px 10px #ccc;
  box-shadow: 0px 5px 10px 10px rgb(14, 3, 36);

  &:hover {
    background-image: url(${hoverpic});
  }
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <NavWrapper>
          <HashRouter>
            <Link to={this.props.baseUrl} className="btn btn-light m-1">
              <BtnTextWrapper>Home</BtnTextWrapper>
            </Link>
            {this.props.categories &&
              this.props.categories.map((cat) => (
                <Link to={cat.toLowerCase()} className="btn btn-light m-1">
                  <BtnTextWrapper>{cat.replace(/_/g, " ")}</BtnTextWrapper>
                </Link>
              ))}
          </HashRouter>
        </NavWrapper>
        <BottomWrapper>
          <TextWrapper>Stuff about Kyle Icban</TextWrapper>
          <ProfileWrapper>
            <ProfPic></ProfPic>
          </ProfileWrapper>
        </BottomWrapper>
      </HeaderWrapper>
    );
  }
}
