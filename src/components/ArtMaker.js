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

const BigPicBackground = styled.div`
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

const BigPicWrapper = styled.div`
  align-items: center;
  display: block;
  height: 80%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 550px) {
    height: auto;
    max-height: 75%;
    width: 66%;
  }
`;

const BigPicImage = styled.img`
  background: url(${(props) => props.src}) no-repeat;
  background-size: contain;
  height: 80%;
  width: auto;

  @media only screen and (max-width: 550px) {
    height: auto;
    width: 100%;
  }
`;

const BigPicCaption = styled.p`
  color: white;
  font-size: 12px;
  font-weight: lighter;
  padding: 10px;
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
        <BigPicBackground show={this.state.isZoomed} onClick={this.zoomOut}>
          <BigPicWrapper>
            <BigPicImage src={this.props.art} alt="zoom-in artpiece" />
            <BigPicCaption>{this.props.caption}</BigPicCaption>
          </BigPicWrapper>
        </BigPicBackground>
      </>
    );
  }
}
