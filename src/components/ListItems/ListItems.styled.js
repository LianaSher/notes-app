import { styled } from "styled-components";

export const Item = styled.li`
  min-height: 50px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  background-color: ${(props) => (props.active ? "lightgray" : "whitesmoke")};

  @media screen and (min-width: 768px) {
    min-height: 70px;
    padding: 15px;

    font-size: 15px;
  }
  @media screen and (min-width: 1200px) {
    min-height: 100px;
    padding: 18px;
    font-size: 18px;
  }
`;
