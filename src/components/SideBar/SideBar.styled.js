import { styled } from "styled-components";

export const UlStyled = styled.ul`
  border-right: 2px solid lightgrey;
  width: 35%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`;
