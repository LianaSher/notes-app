import { useContext } from "react";

import { AppContext } from "../../App";

import { dateFormatting } from "../../services";

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

  const date = dateFormatting(activeNote.id);

  return (
    <form>
      <label>
        {date}
        <textarea
          onChange={handleInput}
          onBlur={handleBlur}
          name="text"
          wrap="soft"
          value={activeNote.text}
        ></textarea>
      </label>
      <button>save</button>
    </form>
  );
};
