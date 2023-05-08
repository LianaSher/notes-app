import { styled } from "styled-components";

import plus from "../../images/plus.svg";
import trash from "../../images/trash.svg";
import edit from "../../images/edit.svg";

export const HeaderStyled = styled.header`
  padding: 15px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  @media screen and (min-width: 480px) {
    margin-right: 30px;
    margin-bottom: 0px;
  }
`;

export const AddButton = styled.button`
  height: 20px;
  width: 40px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 3px;
  background-image: url("${plus}");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f5f4fa;
  &:hover,
  &:focus {
    background-color: white;
  }
  @media screen and (min-width: 1200px) {
    height: 30px;
    width: 70px;
  }
`;
export const DelButton = styled.button`
  height: 20px;
  width: 40px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 3px;
  background-image: url("${trash}");
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f5f4fa;
  &:hover,
  &:focus {
    background-color: white;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media screen and (min-width: 1200px) {
    height: 30px;
    width: 70px;
  }
`;
export const EditButton = styled.button`
  height: 20px;
  width: 40px;
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 3px;
  background-image: url("${edit}");
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f5f4fa;
  &:hover,
  &:focus {
    background-color: white;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media screen and (min-width: 1200px) {
    height: 30px;
    width: 70px;
  }
`;
