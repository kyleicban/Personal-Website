import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";
import { ArtPortImages } from "../data/data";

const ArtPortWrapper = styled.div`
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 10px;
  color: rgb(15, 8, 43);
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding: 40px;
  padding-bottom: 60px;
  width: 850px;

  @media only screen and (max-width: 1050px) {
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    padding: 8px;
    width: 98%;
  }
`;

const Image = styled.img`
  background: url(${(props) => props.src}) no-repeat;
  background-size: contain;
  height: 225px;
  margin: auto;
  margin-bottom: 50px;
  transition: 0.5s;
  width: auto;

  &:hover {
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

export default class ArtPort extends Component {
  render() {
    return (
      <PageWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
        >
          <TitleWrapper>ART PORTFOLIO</TitleWrapper>
          <ArtPortWrapper>
            {ArtPortImages.map((art) => {
              return <Image src={art} alt="an artpiece" />;
            })}
          </ArtPortWrapper>
        </motion.div>
      </PageWrapper>
    );
  }
}
