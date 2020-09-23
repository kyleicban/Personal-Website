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
              "My name is Kyle Icban and I'm a third year Mathematics of
              Computation major at UCLA. I'm an aspiring Software Engineer
              looking for any opportunity to help me further develop this
              totally original passion I have. I also have 2 years of
              professional design and illustration experience. I'm particularly
              interested in Front End Web Dev and Game Dev. Here is the part
              where I keep talking about myself, so if you don't really care
              then feel free to check out some other links, I don't mind!
              <br />
              <br />
              But if you're still here then here is more or less what I tell
              interviewers when they say "TELL ME ABOUT YOURSELF" (as the title
              would suggest duhh):
              <br />
              <br />
              I started my college career at UCLA as a Pure Mathematics major,
              so yea I like math. But halfway through my second year as I
              started getting deeper into theoretical mathematics, I discovered
              that this pure math was NOT IT for me. Luckily, it was then where
              I took my first programming class. My initial thought was "oh hey,
              this isn't so bad." I suppose my math background made this field
              transition a lot easier.
              <br />
              <br />
              So here I am, jumping into a different subject doing as much as I
              can to learn as much as I can. In just one summer, I managed to
              teach myself the fundamentals of Javscript and React. In just one
              summer, I completed three internships in various positions in
              design, frontend, and backend development. In just one summer, I
              surprised even myself about how much I love coding. My goal: to
              continue to build my skillset to one day become a somewhat decent
              programming. Stay tuned to receive further updates on where I'm at
              :D
              <br />
              <br />
              Thanks for making it this far and for checking out my website!
              Feel free to click on any links :)"
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
