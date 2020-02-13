import React from "react";
import styled from "styled-components";
import Hexagon from "react-hexagon";

const deskTop = "1280px";
const tablet = "768px";
const mobile = "480px";

const GridRow = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.small ? "repeat(3, 250px)" : "repeat(4, 250px)"};
  grid-gap: 5px 50px;
  justify-content: center;
  max-width: 1440px;
  margin: ${props => (props.small ? "-30px auto" : "auto")};

  @media screen and (max-width: ${deskTop}) {
    grid-template-columns: ${props =>
      props.small ? "repeat(3, 215px)" : "repeat(4, 215px)"};
    grid-gap: 0px 10px;
    ${props => props.small && "margin: -53px auto;"}
  }
  @media screen and (max-width: ${tablet}) {
    grid-template-columns: ${props =>
      props.small ? "repeat(3, 180px)" : "repeat(4, 180px)"};
    grid-gap: 0px 5px;
    ${props => props.small && "margin: -47px auto"}
  }
  @media screen and (max-width: ${mobile}) {
    display: none;
  }
`;

const MobileGrid = styled.div`
  display: none;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px 5px;
  justify-content: center;

  @media screen and (max-width: ${mobile}) {
    display: grid;
  }
`;

const StyledSvgText = styled.text`
  font-size: 2.5rem;
  font-weight: 500;
  text-anchor: middle;
`;

const hexagon = (content, index) => {
  return (
    <Hexagon
      key={index}
      style={{ stroke: "none", opacity: "0.6" }} //style doesn't work on styled-component, keeping in-line
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

  concatedRows.pop(); //removeing last content to make an a even 10

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
      <DeskTopGallary rowOne={rowOne} rowTwo={rowTwo} rowThree={rowThree} />
      <MobileGallary rowOne={rowOne} rowTwo={rowTwo} rowThree={rowThree} />
    </React.Fragment>
  );
};

export default HexGallery;
