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
              "My name is Kyle Icban and I'm a third year student studying
              Mathematics of Computation with a minor in Philosophy at UCLA. I'm
              an aspiring Web Developer currently looking for an internship role
              for Spring or Summer 2021. As an added plus, I also have 2 years
              of professional design and illustration experience. In my free
              time I enjoy hiking, rock climbing, and playing video games with
              my friends.
              <br />
              <br />
              I started my college career at UCLA as a Pure Mathematics major,
              but halfway through my second year as I started getting deeper
              into theoretical mathematics, I discovered that this field did not
              suit my interests anymore. I still thoroughly enjoy the logical
              grit needed to solve these mathematical deductions, however I
              found myself lacking stimulation in the creativity department. It
              was then when I decided to shift career paths into the tech
              industry.
              <br />
              <br />
              Summer 2020 marked my dead sprint into software development. After
              countless hours of self study and motivation, I feel confident
              enough to proudly call myself a full stack web developer. In just
              one summer, I completed three internships in various positions in
              design, frontend, and backend development. As I enter the
              2020-2021 school year, I'm determined to keep this momentum going
              in my favor. My goal: to continue to build my skillset to one day
              become a among some of the best developers in the industry. Stay
              tuned to receive further updates on where I'm at!"
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
