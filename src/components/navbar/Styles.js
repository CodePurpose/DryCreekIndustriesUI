import styled from "styled-components";

const red = "#A5000C";

const tablet = "768px";
const mobile = "480px";

export const TitleContent = styled.div`
  max-width: 380px;
  margin: 16px 10px;
  text-align: left;
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;

  @media screen and (max-width: ${tablet}) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: ${mobile}) {
    font-size: 1rem;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  color: ${red};

  @media screen and (max-width: ${mobile}) {
    font-size: 0.9rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  > li {
    list-style: none;
    margin: 0 10px;

    > a {
      text-decoration: none;
      color: black;
      font-size: 1.1rem;
      font-weight: 600;
      transition: all 0.2s ease-out;

      &:hover {
        color: ${red};
      }

      @media screen and (max-width: ${tablet}) {
        font-size: 0.89rem;
      }
    }
  }

  @media screen and (max-width: ${mobile}) {
    display: none;
  }
`;

export const MenuIcon = styled.span`
  display: none;
  font-size: 2rem;
  color: ${red};
  align-self: center;

  @media screen and (max-width: ${mobile}) {
    display: block;
  }
`;
