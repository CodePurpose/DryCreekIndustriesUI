import React from "react";
import {
  FooterBackground,
  FooterContainer,
  ContactInfoContainer,
  InfoContainer,
  Info,
  ContactUsTitle,
  CodePurposeFooterBackground
} from "./Styles";
import ContactUsForm from "../contactUsForm";

const CodePurposeFooter = () => {
  return (
    <CodePurposeFooterBackground>
      <p>
        Made by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepurpose.io/"
        >
          CodePurpose
        </a>
      </p>
    </CodePurposeFooterBackground>
  );
};

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
    <React.Fragment>
      <FooterBackground id="contactUs" color={"black"}>
        <FooterContainer>
          <ContactInfoContainer>
            {contactInfo.map((info, index) => displayContactInfo(info, index))}
          </ContactInfoContainer>
          <ContactUsFormSection />
        </FooterContainer>
      </FooterBackground>
      <CodePurposeFooter />
    </React.Fragment>
  );
};

export default Footer;
