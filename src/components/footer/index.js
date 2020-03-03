import React from "react";
import {
  FooterContainer,
  ContactInfoContainer,
  InfoContainer,
  Info,
  ContactUsTitle
} from "./Styles";
import { Background } from "../globalStyles";
import ContactUsForm from "../contactUsForm";

const ContactUsFormSection = () => {
  return (
    <div>
      <ContactUsTitle>
        <span>Contact</span> Us
      </ContactUsTitle>
      <ContactUsForm />
    </div>
  );
};

const displayContactInfo = (info, index) => {
  return (
    <InfoContainer key={index}>
      <Info>
        <h4>{info.name}</h4>
        <p>{info.detail}</p>
      </Info>
      <i className={info.icon}></i>
    </InfoContainer>
  );
};

const Footer = props => {
  const { contactInfo } = props;
  return (
    <Background id="contactUs" color={"black"}>
      <FooterContainer>
        <ContactInfoContainer>
          {contactInfo.map((info, index) => displayContactInfo(info, index))}
        </ContactInfoContainer>
        <ContactUsFormSection />
      </FooterContainer>
    </Background>
  );
};

export default Footer;
