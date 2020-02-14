import React from "react";
import { RedBannerBackground, RedBannerContent } from "./Styles";

const RedBanner = props => {
  const { red } = props;

  return (
    <RedBannerBackground color={red}>
      <RedBannerContent>
        <h2>HELPING YOU BUILD YOUR DREAM PROJECT IS OUR SPECIALTY!</h2>
        <h3>We can do it all!</h3>
      </RedBannerContent>
    </RedBannerBackground>
  );
};

export default RedBanner;
