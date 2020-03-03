import styled from "styled-components";
import { Background, Container } from "../globalStyles";

export const RedBannerBackground = styled(Background)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RedBannerContent = styled(Container)`
  text-align: center;
  color: white;

  > h2 {
    margin: 0 0 1em 0;
  }
  > h3 {
    margin: 1em 0 0 0;
  }
`;
