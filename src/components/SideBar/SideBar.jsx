import { useContext } from "react";

import { AppContext } from "../../App";
import { ListItems } from "../ListItems/ListItems";

export const SideBar = () => {
  return (
    <ul>
      <ListItems />
    </ul>
  );
};
