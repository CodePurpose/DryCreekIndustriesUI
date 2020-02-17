import React from "react";
import {
  AboutUsBackground,
  AboutUsContainer,
  ItemContainer,
  IconContainer,
  TextContainer
} from "./Styles";

const items = (item, index) => {
  return (
    <React.Fragment>
      <ItemContainer key={index}>
        <IconContainer>
          <i className={item.icon} />
        </IconContainer>
        <TextContainer>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </TextContainer>
      </ItemContainer>
    </React.Fragment>
  );
};

const AboutUs = props => {
  const { content, grey } = props;

  return (
    <AboutUsBackground color={grey}>
      <AboutUsContainer>
        {content.map((item, index) => items(item, index))}
      </AboutUsContainer>
    </AboutUsBackground>
  );
};

export default AboutUs;
