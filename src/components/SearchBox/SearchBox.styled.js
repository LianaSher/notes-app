import { styled } from "styled-components";
import search from "../../images/search.svg";

export const Input = styled.input`
  width: 300px;
  border-radius: 3px;
  height: 20px;
  border-color: grey;
  font-size: 10px;
  padding-left: 20px;
  background-image: url("${search}");
  background-size: 10%;
  background-repeat: no-repeat;
  background-position: 3px 2px;
  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 30px;
    background-position: 4px 7px;
    padding-left: 30px;
  }
`;
