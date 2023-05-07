import { useContext } from "react";

import { AppContext } from "../../App";

import { SearchBox } from "../SearchBox/SearchBox";

export const Header = () => {
  const { addItem, setIsEdition } = useContext(AppContext);

  const handleEdit = () => {
    setIsEdition(true);
  };

  return (
    <header>
      <button onClick={addItem}>Add</button>
      <button>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      <SearchBox />
    </header>
  );
};
