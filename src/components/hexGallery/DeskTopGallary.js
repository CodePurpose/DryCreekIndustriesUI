import React from "react";
import { GridRow } from "./Styles";

const DeskTopGallary = props => {
  const { rowOne, rowTwo, rowThree, hexagon } = props;

  return (
    <React.Fragment>
      <GridRow>
        {rowOne.map((content, index) => hexagon(content, index))}
      </GridRow>
      <GridRow small>
        {rowTwo.map((content, index) => hexagon(content, index))}
      </GridRow>
      <GridRow>
        {rowThree.map((content, index) => hexagon(content, index))}
      </GridRow>
    </React.Fragment>
  );
};

export default DeskTopGallary;
