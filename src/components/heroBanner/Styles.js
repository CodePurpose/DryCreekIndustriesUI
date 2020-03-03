import styled from "styled-components";

const mobile = "480px";

export const HeroImageBackground = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoarderLine = styled.div`
  width: 400px;
  height: 200px;
  border: 2px solid rgba(255, 255, 255, 0.75);
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: ${mobile}) {
    margin: 10px;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
      text-align: center;
      padding: 0 15px;
    }
  }
`;
