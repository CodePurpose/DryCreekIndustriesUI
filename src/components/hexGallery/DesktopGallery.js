import React from "react";
import { GridRow } from "./Styles";

const DesktopGallery = props => {
  const { galleryImages, hexagon } = props;

  return (
    <React.Fragment>
      {galleryImages.map((row, index) => {
        return (
          <GridRow small={index === 1 ? true : false} key={index}>
            {row.map((imageObject, index) => hexagon(imageObject, index))}
          </GridRow>
        );
      })}
    </React.Fragment>
  );
};

export default DesktopGallery;
