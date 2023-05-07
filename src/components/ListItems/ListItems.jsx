import { useContext } from "react";

import { AppContext } from "../../App";

export const ListItems = () => {
  const { notes, activeNote, setActiveNote } = useContext(AppContext);

  const handleClick = (e) => {
    const activeItemId = e.target.id;
    console.log(e.target.textContent);
    const activeItem = { id: e.target.id, text: e.target.textContent };
    setActiveNote(activeItem);
  };

  return notes.map(({ id, text }) => {
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
