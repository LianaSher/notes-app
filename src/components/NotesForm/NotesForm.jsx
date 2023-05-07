import { useContext } from "react";

import { AppContext } from "../../App";

export const NotesForm = () => {
  const { notes, setNotes, activeNote, setActiveNote, setIsEdition } =
    useContext(AppContext);

  const handleInput = (e) => {
    setActiveNote({ ...activeNote, text: e.target.value });
    const updatedNotes = notes.map((note) =>
      note.id === activeNote.id ? activeNote : note
    );
    setNotes(updatedNotes);
  };
  const handleBlur = () => {
    setIsEdition(false);
  };

  return (
    <label>
      <textarea
        onChange={handleInput}
        onBlur={handleBlur}
        name="text"
        wrap="soft"
        value={activeNote.text}
      ></textarea>
    </label>
  );
};
