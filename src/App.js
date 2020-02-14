import React from "react";

import NavBar from "./components/navbar";
import HexGallery from "./components/hexGallery";
import HeroBanner from "./components/heroBanner";
import RedBanner from "./components/redBanner";

import cabinets from "./images/cabinets.jpg";
import concrete from "./images/concrete.jpg";
import carpentryFinish from "./images/carpentryFinishWork.jpeg";
import flooring from "./images/flooring.jpg";
import homeMaintenace from "./images/homeMaintenance.jpg";
import homeRemodeling from "./images/homeRemodeling.jpg";
import lighting from "./images/lighting.jpg";
import railing from "./images/railing.jpg";
import roughCarpentry from "./images/roughCarpentry.jpg";
import shelving from "./images/shelving.jpg";
import stairCases from "./images/stairCases.jpg";
import heroBanner from "./images/heroBanner.jpg";

const title = { name: "DRY CREEK INDUSTRIES", subTitle: "General Contracting" };

const links = [
  { name: "Home", path: "/" },
  { name: "Testimonials", path: "/" },
  { name: "Gallery", path: "/" },
  { name: "Contact Us", path: "/" }
];

const rowOne = [
  { title: "Rough Carpentry", img: roughCarpentry },
  { title: "Carpentry Finish Work", img: carpentryFinish },
  { title: "Home Remodeling", img: homeRemodeling },
  { title: "Home Maintence", img: homeMaintenace }
];
const rowTwo = [
  { title: "Cabinets", img: cabinets },
  { title: "Lighting", img: lighting },
  { title: "Railing", img: railing }
];
const rowThree = [
  { title: "Stair Cases", img: stairCases },
  { title: "Flooring", img: flooring },
  { title: "Shelving", img: shelving },
  { title: "Concrete", img: concrete }
];

const red = "#A5000C";

function App() {
  return (
    <React.Fragment>
      <NavBar links={links} title={title} />
      <HeroBanner img={heroBanner} />
      <RedBanner red={red} />
      <HexGallery rowOne={rowOne} rowTwo={rowTwo} rowThree={rowThree} />
    </React.Fragment>
  );
}

export default App;
