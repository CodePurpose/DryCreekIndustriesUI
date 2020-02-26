import React from "react";
import { MobileNavBody, NavMobile } from "./Styles";
import Backdrop from "../backdrop";
import { Link } from "react-scroll";

const MobileNav = props => {
  const { click, open, links } = props;

  return (
    <React.Fragment>
      <MobileNavBody open={open}>
        <NavMobile>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link smooth={true} to={link.path} onClick={click}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </NavMobile>
      </MobileNavBody>
      {open && <Backdrop click={click} />}
    </React.Fragment>
  );
};

export default MobileNav;
