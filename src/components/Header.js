import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";
import styled from "styled-components";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

import mainpic from "../assets/me1.jpg";
import hoverpic from "../assets/me2.jpg";
import resume from "../assets/kyleIcbanResume.pdf";

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
  margin: 0;
  padding-left: 50px;
  width: 50%;
`;

const TitleWrapper = styled.div`
  font-size: 70px;
  font-weight: bold;
  height: 50%;
  padding-top: 10px;
`;

const CaptionWrapper = styled.div`
  font-size: 24px;
  height: 40%;
`;

const LinkWrapper = styled.div`
  height: 10%;
`;

const SocialLink = styled.a`
  color: white;
  margin-right: 20px;

  & > * {
    width: 30px;
    height: 30px;
    transition: 0.2s;
  }
  &:hover {
    & > * {
      color: white;
      transform: scale(1.3);
    }
  }
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
  right: 50px;
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
            <a
              target="_blank"
              href={resume}
              className="btn btn-light m-1"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </HashRouter>
        </NavWrapper>
        <BottomWrapper>
          <TextWrapper>
            <TitleWrapper>Kyle Icban</TitleWrapper>
            <CaptionWrapper>
              WELCOME TO MY SUPER AWESOME EPIC WEBSITE
              <br /> hope you like it :)
            </CaptionWrapper>
            <LinkWrapper>
              <SocialLink
                target="_blank"
                href="https://www.linkedin.com/in/kyle-icban/"
              >
                <AiOutlineLinkedin />
              </SocialLink>
              <SocialLink target="_blank" href="https://github.com/kyleicban">
                <AiOutlineGithub />
              </SocialLink>
              <SocialLink
                target="_blank"
                href="https://www.instagram.com/kyleicban/"
              >
                <AiOutlineInstagram />
              </SocialLink>
              <SocialLink target="_blank" href="mailto:kyleicban@yahoo.com">
                <AiOutlineMail />
              </SocialLink>
            </LinkWrapper>
          </TextWrapper>
          <ProfileWrapper>
            <ProfPic></ProfPic>
          </ProfileWrapper>
        </BottomWrapper>
      </HeaderWrapper>
    );
  }
}
