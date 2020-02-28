import React from "react";
import Hexagon from "react-hexagon";
import DeskTopGallary from "./DeskTopGallary";
import MobileGallary from "./MobileGallary";
import { Container } from "../globalStyles";
import { StyledSvgText, H2 } from "./Styles";

const hexagon = (content, index) => {
  return (
    <Hexagon
      key={index}
      style={{ stroke: "none", opacity: "0.6" }} //'stroke' style doesn't work in styled-component, keeping in-line style.
      backgroundScale={1.2}
      backgroundImage={content.img}
    >
      <StyledSvgText x="50%" y="50%">
        {content.title}
      </StyledSvgText>
    </Hexagon>
  );
};

const HexGallery = props => {
  const { rowOne, rowTwo, rowThree } = props;

  const concatedRows = rowOne.concat(rowTwo, rowThree);
  concatedRows.pop(); //removeing last item to make an a even 10, for cosmetic purposes on mobile view.

  return (
    <React.Fragment>
      <Container id="gallery">
        <DeskTopGallary
          rowOne={rowOne}
          rowTwo={rowTwo}
          rowThree={rowThree}
          hexagon={hexagon}
        />
        <MobileGallary rows={concatedRows} hexagon={hexagon} />
      </Container>
      <H2>AND SO MUCH MORE!</H2>
    </React.Fragment>
  );
};

export default HexGallery;
