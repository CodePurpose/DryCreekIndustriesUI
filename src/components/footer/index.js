import React from "react";
import styled from "styled-components";
import ContactUsForm from "../contactUsForm";

const FooterBackground = styled.div`
  background-color: ${props => props.color};
  width: 100%;
`;
const mobile = "480px";

const FooterContainer = styled.div`
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
const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 20px;

  > i {
    font-size: 1.5rem;
  }
`;

const Info = styled.div`
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
const red = "#A5000C";

const ContactUsTitle = styled.h1`
  margin-top: 0;
  text-align: center;
  > span {
    color: ${red};
  }
`;

const Footer = props => {
  const { contactInfo } = props;
  return (
    <FooterBackground color={"black"}>
      <FooterContainer>
        <ContactInfoContainer>
          {contactInfo.map((info, index) => {
            return (
              <InfoContainer key={index}>
                <Info>
                  <h4>{info.name}</h4>
                  <p>{info.detail}</p>
                </Info>
                <i className={info.icon}></i>
              </InfoContainer>
            );
          })}
        </ContactInfoContainer>
        <div>
          <ContactUsTitle>
            <span>Contact</span> Us
          </ContactUsTitle>
          <ContactUsForm />
        </div>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;
