import React from "react";
import { MobileNavBody, NavMobile } from "./Styles";
import Backdrop from "../backdrop";
import { Link } from "react-scroll";

const MobileNav = props => {
  return (
    <React.Fragment>
      <MobileNavBody open={props.open}>
        <NavMobile>
          <ul>
            {props.links.map((link, index) => (
              <li key={index}>
                <Link smooth={true} to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </NavMobile>
      </MobileNavBody>
      {props.open && <Backdrop click={props.click} />}
    </React.Fragment>
  );
};

export default MobileNav;
