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
              "My name is Kyle Icban and I'm a senior at UCLA studying Applied 
              Mathematics with a Computing Specialization. With that said, I chose 
              Frontend Software Engineering as my career path of choice! In my 
              free time I enjoy running, rock climbing, and playing video games w
              ith my friends.
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
              Summer 2020 marked a dead sprint into design and software development. 
              I self-taught the fundamentals of web development myself just through
              YouTube and Codecademy in that summer. It was a crazyyy grind. 
              Even now, I feel just as passionate about frontend development as I 
              had at the beginning, and I can only see it going up even more. My 
              goal: to continue to build my skillset to one day work alongside 
              some of the best developers in the industry. Stay tuned to receive 
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
