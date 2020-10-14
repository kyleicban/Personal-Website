import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ArtMaker from "../components/ArtMaker";
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

export default class ArtPort extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 280,
      left: 100,
      behavior: 'smooth'
    });
  }

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
            {ArtPortImages.map((illo) => {
              return <ArtMaker art={illo.art} caption={illo.caption} />;
            })}
          </ArtPortWrapper>
        </motion.div>
      </PageWrapper>
    );
  }
}
