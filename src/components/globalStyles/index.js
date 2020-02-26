import styled from "styled-components";

const red = "#A5000C";

export const Background = styled.div`
  background-color: ${props => props.color};
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 48px 16px;
`;

export const RedButton = styled.button`
  background-color: ${red};
  border: none;
  border-radius: 20px;
  padding: 10px 50px;
  max-width: 200px;
  font-weight: 600;
  color: white;

  :hover {
    cursor: pointer;
  }
`;
