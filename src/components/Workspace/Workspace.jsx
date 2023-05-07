import { useContext } from "react";

import { AppContext } from "../../App";

import { NotesForm } from "../NotesForm/NotesForm";
import { dateFormatting } from "../../services";

export const Workspace = () => {
  const { notes, activeNote, isEdition } = useContext(AppContext);

  const date = activeNote.id ? dateFormatting(activeNote.id) : "";

  if (!notes || !activeNote) {
    return;
  }

  return (
    <>
      <p>{date}</p>
      <div>{isEdition ? <NotesForm /> : <p>{activeNote.text}</p>}</div>
    </>
  );
};
