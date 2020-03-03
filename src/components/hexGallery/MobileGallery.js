import React from "react";
import { MobileGrid } from "./Styles";

const MobileGallery = props => {
  const { galleryImages, hexagon } = props;

  return (
    <MobileGrid>
      {galleryImages.map((imageObject, index) => hexagon(imageObject, index))}
    </MobileGrid>
  );
};

export default MobileGallery;
