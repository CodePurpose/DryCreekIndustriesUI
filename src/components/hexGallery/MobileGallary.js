import React from "react";
import { MobileGrid } from "./Styles";

const MobileGallary = props => {
  const { rows, hexagon } = props;

  return (
    <MobileGrid>
      {rows.map((content, index) => hexagon(content, index))}
    </MobileGrid>
  );
};

export default MobileGallary;
