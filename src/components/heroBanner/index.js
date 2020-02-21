import React from "react";
import {
  HeroImageBackground,
  BoarderLine,
  InnerContainer,
  Button
} from "./Styles";
import { Link } from "react-scroll";

const Box = () => (
  <BoarderLine>
    <InnerContainer>
      <h3>OVER 20 YEARS OF EXPERIENCE</h3>
      <Link smooth={true} to="contactUs">
        <Button>Get Quote</Button>
      </Link>
    </InnerContainer>
  </BoarderLine>
);

const HeroBanner = props => {
  const { img } = props;
  return (
    <React.Fragment>
      <HeroImageBackground id="home" img={img}>
        <Box />
      </HeroImageBackground>
    </React.Fragment>
  );
};

export default HeroBanner;
