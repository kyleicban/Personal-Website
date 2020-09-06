import React, { Component } from "react";
import styled from "styled-components";

import { PageWrapper, TitleWrapper } from "../components/PageWrapper";

const OutlineWrapper = styled.div`
  color: rgb(15, 8, 43);
  border: 0.5px solid rgba(15, 8, 43, 0.5);
  border-radius: 10px;
  margin: auto;
  padding: 40px;
  padding-bottom: 60px;
  width: 600px;
`;

const BodyWrapper = styled.p`
  text-align: left;
`;

export default class Home extends Component {
  render() {
    return (
      <PageWrapper className="card">
        <OutlineWrapper>
          <TitleWrapper>ABOUT ME</TitleWrapper>
          <BodyWrapper>
            "My name is Kyle Icban and I'm a third year Mathematics of
            Computation major at UCLA. I'm an aspiring Software Engineer looking
            for any opportunity to help me further develop this totally original
            passion I have. I also have 2 years of professional design and
            illustration experience. As a result, I'm particularly interested in
            Web Dev and Game Dev. Here is the part where I keep talking about
            myself, so if you don't really care then feel free to check out some
            other links, I don't mind :)
            <br />
            <br />
            But if you're still here then here is more or less what I tell
            interviewers when they say "TELL ME ABOUT YOURSELF" (as the title
            would suggest duhh):
            <br />
            <br />
            I started my college career at UCLA as a Pure Mathematics major, so
            yea I like math. But halfway through my second year as I started
            getting deeper into theoretical mathematics, I discovered that this
            pure math was NOT IT for me. Luckily, it was then where I took my
            first programming class. My initial thought was "oh hey, this isn't
            so bad." I suppose my math background made this field transition a
            lot easier.
            <br />
            <br />
            So here I am, jumping into a different subject doing as much as I
            can to learn as much as I can. I spent this past summer teaching
            myself web development, building my skillset to one day become a
            somewhat decent programming. Stay tuned to receive further updates
            on where I'm at :D
            <br />
            <br />
            Thanks for making it this far and for checking out my website! Feel
            free to click on any links :)"
            <br />
            <br />
            --Kyle Icban
          </BodyWrapper>
        </OutlineWrapper>
      </PageWrapper>
    );
  }
}
