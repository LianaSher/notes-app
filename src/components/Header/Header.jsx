import { useContext } from "react";

import { AppContext } from "../../App";
import { SearchBox } from "../SearchBox/SearchBox";

import {
  HeaderStyled,
  ButtonsWrapper,
  AddButton,
  DelButton,
  EditButton,
} from "../Header/Header.styled";

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
    <HeaderStyled>
      <ButtonsWrapper>
        <AddButton onClick={addItem}></AddButton>
        <DelButton
          onClick={handleDelete}
          disabled={Boolean(!Object.keys(activeNote).length)}
        ></DelButton>
        <EditButton
          onClick={handleEdit}
          disabled={Boolean(!Object.keys(activeNote).length)}
        ></EditButton>
      </ButtonsWrapper>
      <SearchBox />
    </HeaderStyled>
  );
};
