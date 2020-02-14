import styled from "styled-components";

const deskTop = "1280px";
const tablet = "768px";
const mobile = "480px";

export const GalleryContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 48px 16px;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.small ? "repeat(3, 250px)" : "repeat(4, 250px)"};
  grid-gap: 5px 50px;
  justify-content: center;
  margin: ${props => props.small && "-30px auto"};

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

export const MobileGrid = styled.div`
  display: none;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px 5px;
  justify-content: center;

  @media screen and (max-width: ${mobile}) {
    display: grid;
  }
`;

export const StyledSvgText = styled.text`
  font-size: 2.5rem;
  font-weight: 500;
  text-anchor: middle;
`;

export const H2 = styled.h2`
  margin: 0;
  padding-bottom: 1em;
  text-align: center;
`;
