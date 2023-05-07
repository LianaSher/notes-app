import { useContext } from "react";

import { AppContext } from "../../App";

import { NotesForm } from "../NotesForm/NotesForm";

export const Workspace = () => {
  const { notes, activeNote, isEdition } = useContext(AppContext);
  if (!notes || !activeNote) {
    return;
  }

  //   const activeNoteObj = notes.find(({ id }) => id === activeNote);

  return <div>{isEdition ? <NotesForm /> : <p></p>}</div>;
};
