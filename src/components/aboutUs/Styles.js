import styled from "styled-components";
import { Container } from "../globalStyles";

const mobile = "480px";
const smallDeskTop = "1024px";

export const AboutUsContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  max-width: 470px;

  > h3 {
    margin: 0;
  }

  @media screen and (max-width: ${smallDeskTop}) {
    max-width: 370px;
  }
`;

export const IconContainer = styled.i`
  font-size: 3rem;
  margin-right: 40px;
  width: 65px;

  @media screen and (max-width: ${smallDeskTop}) {
    font-size: 2rem;
    margin-right: 10px;
    width: 55px;
  }

  @media screen and (max-width: ${mobile}) {
    font-size: 1.5rem;
    margin-right: 10px;
    width: 50px;
  }
`;
