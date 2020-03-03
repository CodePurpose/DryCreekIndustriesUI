import React from "react";
import {
  AboutUsContainer,
  ItemContainer,
  IconContainer,
  TextContainer
} from "./Styles";
import { Background } from "../globalStyles";

const items = (item, index) => {
  return (
    <ItemContainer key={index}>
      <IconContainer>
        <i className={item.icon} />
      </IconContainer>
      <TextContainer>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </TextContainer>
    </ItemContainer>
  );
};

const AboutUs = props => {
  const grey = "#E5E5E5";
  const { content } = props;

  return (
    <Background color={grey}>
      <AboutUsContainer>
        {content.map((item, index) => items(item, index))}
      </AboutUsContainer>
    </Background>
  );
};

export default AboutUs;
