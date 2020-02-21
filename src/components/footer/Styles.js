import styled from "styled-components";

const mobile = "480px";
const red = "#A5000C";

export const FooterBackground = styled.div`
  background-color: ${props => props.color};
  width: 100%;
`;

export const FooterContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 48px 16px;
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

export const CodePurposeFooterBackground = styled.div`
  background-color: #000000e3;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  color: white;
  > p {
    margin: 0;
    > a {
      color: white;
    }
  }
`;
