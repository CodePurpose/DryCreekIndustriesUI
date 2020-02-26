import styled from "styled-components";
import { Container } from "../globalStyles";

const mobile = "480px";
const red = "#A5000C";

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;

  @media screen and (max-width: ${mobile}) {
    flex-direction: column;
  }
`;
export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 20px;

  > i {
    font-size: 1.5rem;
  }
`;

export const Info = styled.div`
border-right: 2px solid white;
padding-right: 20px;
margin-right: 20px;
text-align: right;
width: 165px;

> h4 {
  margin-top: 0;
}
> p {
  margin-bottom: 0;
`;

export const ContactUsTitle = styled.h1`
  margin-top: 0;
  text-align: center;

  > span {
    color: ${red};
  }
`;
