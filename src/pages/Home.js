import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";

const OutlineWrapper = styled.div`
  color: rgb(15, 8, 43);
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 10px;
  margin: auto;
  padding: 40px;
  padding-bottom: 60px;
  width: 700px;

  @media only screen and (max-width: 950px) {
    width: 90%;
  }
  @media only screen and (max-width: 480px) {
    width: 98%;
  }
`;

const BodyWrapper = styled.p`
  text-align: left;
`;

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
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
          <TitleWrapper>ABOUT ME</TitleWrapper>
          <OutlineWrapper>
            <BodyWrapper>
              "My name is Kyle Icban and I graduated from UCLA in December 2021 where I studied Applied 
              Mathematics with a Computing Specialization. With that said, h e c k&nbsp; m a t h! I chose to pursue Frontend 
              Development and Design as my career paths because its cooler {'>'}:)! In my 
              free time I enjoy rock climbing, running, and thrifting.
              <br />
              <br />
              I started my college career at UCLA as a Pure Mathematics major,
              but halfway through my second year I discovered something:
              theoretical math is REALLY frickin hard. STEM still was where my 
              interests were, however I found myself lacking in the creativity 
              department. It was then when I decided to shift career paths into 
              the tech industry.
              <br />
              <br />
              Nowadays, I mostly work as a software engineer and pursue art and design
              on the side. G r A p H i C&nbsp; &nbsp; D e S i G n&nbsp; &nbsp; i S&nbsp; &nbsp; m Y&nbsp; &nbsp; P a S S i O n&nbsp; &nbsp;  
              but actually though. Stay tuned to receive 
              further updates on where I'm at!"
              <br />
              <br />
              --Kyle Icban
            </BodyWrapper>
          </OutlineWrapper>
        </motion.div>
      </PageWrapper>
    );
  }
}
