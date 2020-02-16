import styled from "styled-components";

const mobile = "480px";

export const AboutUsBackground = styled.div`
  background-color: ${props => props.color};
  width: 100%;
`;

export const AboutUsContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 48px 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TextContainer = styled.div`
  max-width: 470px;

  > h3 {
    margin: 0;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.i`
  font-size: 3em;
  margin-right: 40px;
  width: 65px;

  @media screen and (max-width: ${mobile}) {
    font-size: 2em;
    margin-right: 20px;
    width: 60px;
  }
`;
