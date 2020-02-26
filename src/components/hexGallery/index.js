import React from "react";
import Hexagon from "react-hexagon";
import {
  GalleryContainer,
  GridRow,
  MobileGrid,
  StyledSvgText,
  H2
} from "./Styles";

const hexagon = (content, index) => {
  return (
    <Hexagon
      key={index}
      style={{ stroke: "none", opacity: "0.6" }} //stroke style doesn't work in styled-component, keeping in-line style
      backgroundScale={1.2}
      backgroundImage={content.img}
    >
      <StyledSvgText x="50%" y="50%">
        {content.title}
      </StyledSvgText>
    </Hexagon>
  );
};

const DeskTopGallary = props => {
  const { rowOne, rowTwo, rowThree } = props;

  return (
    <React.Fragment>
      <GridRow>
        {rowOne.map((content, index) => hexagon(content, index))}
      </GridRow>
      <GridRow small>
        {rowTwo.map((content, index) => hexagon(content, index))}
      </GridRow>
      <GridRow>
        {rowThree.map((content, index) => hexagon(content, index))}
      </GridRow>
    </React.Fragment>
  );
};

const MobileGallary = props => {
  const { rowOne, rowTwo, rowThree } = props;
  const concatedRows = rowOne.concat(rowTwo, rowThree);

  concatedRows.pop(); //removeing last content to make an a even 10, for cosmetic purpose.

  return (
    <React.Fragment>
      <MobileGrid>
        {concatedRows.map((content, index) => hexagon(content, index))}
      </MobileGrid>
    </React.Fragment>
  );
};

const HexGallery = props => {
  const { rowOne, rowTwo, rowThree } = props;

  return (
    <React.Fragment>
      <GalleryContainer id="gallery">
        <DeskTopGallary rowOne={rowOne} rowTwo={rowTwo} rowThree={rowThree} />
        <MobileGallary rowOne={rowOne} rowTwo={rowTwo} rowThree={rowThree} />
      </GalleryContainer>
      <H2>AND SO MUCH MORE!</H2>
    </React.Fragment>
  );
};

export default HexGallery;
