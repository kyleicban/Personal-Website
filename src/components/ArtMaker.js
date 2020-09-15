import React, { Component } from "react";
import styled from "styled-components";

const LittleImage = styled.img`
  background: url(${(props) => props.src}) no-repeat;
  background-size: contain;
  height: 225px;
  margin: auto;
  margin-bottom: 50px;
  transition: 0.5s;
  width: auto;

  &:hover {
    cursor: zoom-in;

    -moz-box-shadow: 0px 0px 10px 3px #ccc;
    -webkit-box-shadow: 0px 0px 10px 3px #ccc;
    box-shadow: 0px 0px 10px 3px rgb(110, 110, 110);
  }

  @media only screen and (max-width: 900px) {
    height: 175px;
  }
  @media only screen and (max-width: 700px) {
    height: auto;
    margin-bottom: 8px;
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    width: 98%;
  }
`;

const BigPicWrapper = styled.div`
  align-items: center;
  animation-name: zoomIn;
  animation-duration: 0.25s;
  animation-timing-function: ease-in;
  background: rgba(42, 47, 56, 0.9);
  bottom: 0;
  display: ${(props) => (props.show ? "block" : "none")};
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  transition: 0.5s;
  top: 0;
  width: 100%;

  &:hover {
    cursor: zoom-out;
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const BigPicImage = styled.img`
  background: url(${(props) => props.src}) no-repeat;
  background-size: contain;
  display: block;
  height: 66%;
  margin: auto;
  position: relative;
  top: 18%;

  @media only screen and (max-width: 550px) {
    height: auto;
    max-height: 75%;
    top: 20%;
    width: 66%;
  }
`;

const BigPicCaption = styled.figcaption`
  color: white;
  font-size: 12px;
  font-weight: lighter;
  padding: 2px;
  position: relative;
  text-align: center;
  width: 100%;
`;

export default class ArtMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isZoomed: false,
      zoomIn: this.zoomIn.bind(this),
      zoomOut: this.zoomOut.bind(this),
    };
  }

  zoomIn = () => {
    this.setState({ isZoomed: true });
    document.body.style.overflow = "hidden";
  };

  zoomOut = () => {
    this.setState({ isZoomed: false });
    document.body.style.overflow = "scroll";
  };

  render() {
    return (
      <>
        <LittleImage
          src={this.props.art}
          alt="an artpiece"
          onClick={this.zoomIn}
        />
        <BigPicWrapper show={this.state.isZoomed} onClick={this.zoomOut}>
          <BigPicImage src={this.props.art} alt="zoom-in artpiece" />
        </BigPicWrapper>
      </>
    );
  }
}
