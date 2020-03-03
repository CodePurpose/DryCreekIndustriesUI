import styled from "styled-components";

const red = "#A5000C";

export const MobileNavBody = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 50%;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  z-index: 200;
`;

export const NavMobile = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  > ul {
    list-style: none;
    padding: 0;

    > li {
      margin: 15px 0;

      > a {
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 450;
        color: ${red};
      }
    }
  }
`;
