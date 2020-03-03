import React from "react";
import Hexagon from "react-hexagon";
import DesktopGallery from "./DesktopGallery";
import MobileGallery from "./MobileGallery";
import { Container } from "../globalStyles";
import { StyledSvgText, H2 } from "./Styles";

import cabinets from "../../images/cabinets.jpg";
import concrete from "../../images/concrete.jpg";
import carpentryFinish from "../../images/carpentryFinishWork.jpeg";
import flooring from "../../images/flooring.jpg";
import homeMaintenace from "../../images/homeMaintenance.jpg";
import homeRemodeling from "../../images/homeRemodeling.jpg";
import lighting from "../../images/lighting.jpg";
import railing from "../../images/railing.jpg";
import roughCarpentry from "../../images/roughCarpentry.jpg";
import shelving from "../../images/shelving.jpg";
import stairCases from "../../images/stairCases.jpg";

const galleryImages = [
  [
    { title: "Rough Carpentry", img: roughCarpentry },
    { title: "Carpentry Finish Work", img: carpentryFinish },
    { title: "Home Remodeling", img: homeRemodeling },
    { title: "Home Maintence", img: homeMaintenace }
  ],
  [
    { title: "Cabinets", img: cabinets },
    { title: "Lighting", img: lighting },
    { title: "Railing", img: railing }
  ],
  [
    { title: "Stair Cases", img: stairCases },
    { title: "Flooring", img: flooring },
    { title: "Shelving", img: shelving },
    { title: "Concrete", img: concrete }
  ]
];

const hexagon = (imageObject, index) => {
  return (
    <Hexagon
      key={index}
      style={{ stroke: "none", opacity: "0.6" }} //'stroke' style doesn't work in styled-component, keeping in-line style.
      backgroundScale={1.2}
      backgroundImage={imageObject.img}
    >
      <StyledSvgText x="50%" y="50%">
        {imageObject.title}
      </StyledSvgText>
    </Hexagon>
  );
};

const HexGallery = props => {
  const flattenGalleryImages = galleryImages.flat();
  flattenGalleryImages.pop(); //removeing last item to make an a even 10, for cosmetic purposes on mobile view.

  return (
    <React.Fragment>
      <Container id="gallery">
        <DesktopGallery galleryImages={galleryImages} hexagon={hexagon} />
        <MobileGallery galleryImages={flattenGalleryImages} hexagon={hexagon} />
      </Container>
      <H2>AND SO MUCH MORE!</H2>
    </React.Fragment>
  );
};

export default HexGallery;
