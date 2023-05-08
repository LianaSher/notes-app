import { useContext } from "react";

import { AppContext } from "../../App";

import { Label, TextArea } from "./NotesForm.styled";

export const NotesForm = () => {
  const { setNotes, activeNote, setActiveNote, setIsEdition } =
    useContext(AppContext);

  const handleInput = (e) => {
    setActiveNote((prevNote) => ({ ...prevNote, text: e.target.value }));
  };
  const handleBlur = () => {
    setIsEdition(false);
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === activeNote.id ? activeNote : note))
    );
  };

  return (
    <Label>
      <TextArea
        onChange={handleInput}
        onBlur={handleBlur}
        name="text"
        wrap="soft"
        value={activeNote.text}
      ></TextArea>
    </Label>
  );
};
