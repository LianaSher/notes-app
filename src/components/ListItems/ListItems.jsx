import { useContext } from "react";

import { AppContext } from "../../App";

export const ListItems = () => {
  const { notes, activeNote, setActiveNote, filtredNotes } =
    useContext(AppContext);

  const handleClick = (e) => {
    const activeItem = { id: e.target.id, text: e.target.textContent };
    console.log(activeItem);
    setActiveNote(activeItem);
  };
  const list = filtredNotes ? filtredNotes : notes;

  return list.map(({ id, text }) => {
    return (
      <li
        id={id}
        key={id}
        // className={id === activeNote ? "active" : ""}
        onClick={handleClick}
      >
        {text}
      </li>
    );
  });
};
