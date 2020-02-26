import React from "react";
import { Link } from "react-scroll";
import { HeroImageBackground, BoarderLine, InnerContainer } from "./Styles";
import { RedButton } from "../globalStyles";

const Box = () => (
  <BoarderLine>
    <InnerContainer>
      <h3>OVER 20 YEARS OF EXPERIENCE</h3>
      <Link smooth={true} to="contactUs">
        <RedButton>Get Quote</RedButton>
      </Link>
    </InnerContainer>
  </BoarderLine>
);

const HeroBanner = props => {
  const { img } = props;
  return (
    <HeroImageBackground id="home" img={img}>
      <Box />
    </HeroImageBackground>
  );
};

export default HeroBanner;
