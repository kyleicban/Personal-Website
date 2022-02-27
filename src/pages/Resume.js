import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";
import resume from "../assets/kyleIcbanResume.pdf";

const OutlineWrapper = styled.div`
  color: rgb(15, 8, 43);
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 10px;
  margin: auto;
  padding: 40px;
  padding-bottom: 60px;
  width: 90%;

  @media only screen and (max-width: 480px) {
    width: 98%;
  }
`;

const IframeWrapper = styled.div`
  height: 600px; 
  width: 98%;
`;

const PDFWrapper = styled.iframe`
  height: 100%;
  width: 100%;
`;

export default class Home extends Component {
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
          <TitleWrapper>RESUME</TitleWrapper>
          <OutlineWrapper>
            <IframeWrapper>
                <PDFWrapper src={resume}></PDFWrapper>
            </IframeWrapper>
          </OutlineWrapper>
        </motion.div>
      </PageWrapper>
    );
  }
}
