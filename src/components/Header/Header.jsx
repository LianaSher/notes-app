import { useContext } from "react";

import { AppContext } from "../../App";

import { SearchBox } from "../SearchBox/SearchBox";

export const Header = () => {
  const {
    addItem,
    setIsEdition,
    activeNote,
    setActiveNote,
    notes,
    setNotes,
    setdeletedNoteId,
  } = useContext(AppContext);

  const handleEdit = () => {
    if (!Object.keys(activeNote).length) {
      return;
    }
    setIsEdition(true);
  };

  const handleDelete = () => {
    const noteIdForDelete = activeNote.id;
    const isConfirm = window.confirm("Please confirm removing this note");
    if (!isConfirm) {
      return;
    }
    const updatedNotes = notes.filter((note) => note.id !== noteIdForDelete);
    setNotes(updatedNotes);
    setdeletedNoteId(noteIdForDelete);
    setActiveNote({});
  };

  return (
    <header>
      <button onClick={addItem}>Add</button>
      <button
        onClick={handleDelete}
        disabled={Boolean(!Object.keys(activeNote).length)}
      >
        Delete
      </button>
      <button
        onClick={handleEdit}
        disabled={Boolean(!Object.keys(activeNote).length)}
      >
        Edit
      </button>
      <SearchBox />
    </header>
  );
};
