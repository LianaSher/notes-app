import { styled } from "styled-components";

export const Space = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    padding: 15px;
    font-size: 17px;
  }
  @media screen and (min-width: 1200px) {
    padding: 18px;
    font-size: 20px;
  }
`;

export const TextWrap = styled.div`
  margin-top: 10px;
  min-width: 100%;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 20px;
  }
`;
