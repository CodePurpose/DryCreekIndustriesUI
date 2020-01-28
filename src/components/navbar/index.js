import React, { Component } from "react";
import { TitleContent, HeaderContent, Title, SubTitle, Nav } from "./Styles";

export default class NavBar extends Component {
  //add state for controlling mobile nav
  render() {
    return (
      <header>
        <HeaderContent>
          <TitleContent>
            <Title>{title.name}</Title>
            <hr />
            <SubTitle red>{title.subTitle}</SubTitle>
          </TitleContent>
          <Nav>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </Nav>
        </HeaderContent>
      </header>
    );
  }
}

const title = { name: "DRY CREEK INDUSTRIES", subTitle: "General Contracting" };

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Testimonials",
    path: "/"
  },
  {
    name: "Gallery",
    path: "/"
  },
  {
    name: "Contact Us",
    path: "/"
  }
];
