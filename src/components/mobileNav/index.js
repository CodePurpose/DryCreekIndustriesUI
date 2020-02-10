import React from "react";
import { MobileNavBody, NavMobile } from "./Styles";
import Backdrop from "../backdrop";

const MobileNav = props => {
  return (
    <React.Fragment>
      <MobileNavBody open={props.open}>
        <NavMobile>
          <ul>
            {props.links.map((link, index) => (
              <li key={index}>
                <a href={link.path}>{link.name}</a>
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
