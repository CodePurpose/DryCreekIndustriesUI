import React from "react";
import {
  AboutUsBackground,
  AboutUsContainer,
  ItemContainer,
  IconContainer,
  TextContainer
} from "./Styled";
const AboutUs = props => {
  const { content, grey } = props;

  return (
    <AboutUsBackground color={grey}>
      <AboutUsContainer>
        {content.map((item, index) => {
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
        })}
      </AboutUsContainer>
    </AboutUsBackground>
  );
};

export default AboutUs;
