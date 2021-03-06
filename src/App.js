import React from "react";

import NavBar from "./components/navbar";
import HexGallery from "./components/hexGallery";
import HeroBanner from "./components/heroBanner";
import RedBanner from "./components/redBanner";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import CodePurposeFooter from "./components/codePurposeFooter";

const title = { name: "DRY CREEK INDUSTRIES", subTitle: "GENERAL CONTRACTING" };

const links = [
  { name: "Home", path: "home" },
  { name: "Gallery", path: "gallery" },
  { name: "Contact Us", path: "contactUs" }
];

const aboutUsContent = [
  {
    title: "YOU ARE WORKING WITH A FRIEND",
    text: `When you work with us you’re not just hiring an expert, you’re hiring a friend for life. We help you take your project from dream to reality. And we don’t pressure you to build anything outside of those dreams.`,
    icon: "fas fa-people-carry"
  },
  {
    title: "NOT SURE YET",
    text:
      "It’s OK if you’re in between the mahogony and cherry wood floors or if you’re unsure you want a theater room. That’s why you have a friend in us. We’re happy to tell you what’s standard, what’s hip, and what’s new. We see it all so we know what works.",
    icon: "far fa-thumbs-up"
  },
  {
    title: "WE UNDERSTAND BUDGETS",
    text:
      "Hey, we get it! We all have budgets. We make sure to give you the best possible quote and stay within those perameters so that you don’t have to spend a penny more.",
    icon: "fas fa-comments-dollar"
  },
  {
    title: "IT’S YOUR PROJECT",
    text:
      "Our mission is to make your project become reality. You choose the location, the material, the color, and we’ll build it from the ground up.",
    icon: "fas fa-hard-hat"
  }
];

const contactInfo = [
  { name: "PHONE", detail: "(801)822-1154", icon: "fas fa-mobile-alt" },
  { name: "EMAIL", detail: "jc81martinez@gmail.com", icon: "far fa-envelope" }
];

function App() {
  return (
    <React.Fragment>
      <NavBar links={links} title={title} />
      <HeroBanner />
      <RedBanner />
      <HexGallery />
      <AboutUs content={aboutUsContent} />
      <Footer contactInfo={contactInfo} />
      <CodePurposeFooter />
    </React.Fragment>
  );
}

export default App;
