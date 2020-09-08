import styled from "styled-components";

export const PageWrapper = styled.div`
  background: white;
  border-radius: 10px;
  margin: auto;
  margin-top: 50px;
  padding: 10px;
  position: relative;
  text-align: center;
  top: -75px;
  width: 95%;
  z-index: 1;

  -moz-box-shadow: 0px 15px 50px 5px #ccc;
  -webkit-box-shadow: 0px 15px 50px 5px #ccc;
  box-shadow: 0px 15px 50px 5px rgb(5, 5, 59);

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TitleWrapper = styled.p`
  color: rgb(15, 8, 43);
  font-size: 50px;
  text-decoration: underline;
`;
