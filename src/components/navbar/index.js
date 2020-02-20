import React, { useState } from "react";
import {
  TitleContent,
  HeaderContent,
  Title,
  SubTitle,
  Nav,
  MenuIcon
} from "./Styles";
import MobileNav from "../mobileNav";
import { Link } from "react-scroll";

const NavBar = props => {
  const { title, links } = props;
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileOpen(!isMobileOpen);
  };

  return (
    <React.Fragment>
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
                <Link spy={true} smooth={true} to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </Nav>
          <MenuIcon>
            <i className="fas fa-bars" onClick={toggleMobileNav}></i>
          </MenuIcon>
        </HeaderContent>
      </header>
      <MobileNav links={links} open={isMobileOpen} click={toggleMobileNav} />
    </React.Fragment>
  );
};

export default NavBar;
