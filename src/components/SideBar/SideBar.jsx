import { useContext } from "react";

import { AppContext } from "../../App";
import { ListItem } from "../ListItem/ListItem";

export const SideBar = () => {
  const { notes, activeNote, setActiveNote } = useContext(AppContext);

  const handleClick = (id) => {
    setActiveNote(id);
  };
  return (
    <ul>
      {notes.map((note) => (
        <ListItem
          key={note.id}
          note={note}
          active={note.id === activeNote}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
};
