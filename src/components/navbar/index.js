import React from "react";
import { TitleContent, HeaderContent, Title, SubTitle, Nav } from "./Styles";

const NavBar = props => {
  const { title, links } = props;
  return (
    <header>
      <HeaderContent>
        <TitleContent>
          <Title>{title.name}</Title>
          <hr />
          <SubTitle>{title.subTitle}</SubTitle>
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
};

export default NavBar;
