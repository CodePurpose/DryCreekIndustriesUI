import styled from "styled-components";

export const RedBannerBackground = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RedBannerContent = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 48px 16px;
  text-align: center;
  color: white;

  > h2 {
    margin: 0 0 1em 0;
  }
  > h3 {
    margin: 1em 0 0 0;
  }
`;
