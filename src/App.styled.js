import { styled } from "styled-components";

export const MainContainer = styled.div`
  /* padding: auto 15px; */
  background-color: #f5f4fa;
  height: 100vh;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Section = styled.div`
  display: flex;
  padding: 15px;
`;
