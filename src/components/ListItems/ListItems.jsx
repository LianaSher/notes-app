import { useContext } from "react";

import { AppContext } from "../../App";
import { Item } from "./ListItems.styled";
export const ListItems = () => {
  const { notes, activeNote, setActiveNote, filtredNotes } =
    useContext(AppContext);

  const handleClick = (e) => {
    const activeItem = { id: e.target.id, text: e.target.textContent };

    setActiveNote(activeItem);
  };
  const list = filtredNotes ? filtredNotes : notes;

  return list.map(({ id, text }) => {
    return (
      <Item
        active={id === activeNote.id ? 1 : null}
        id={id}
        key={id}
        onClick={handleClick}
      >
        {text}
      </Item>
    );
  });
};
