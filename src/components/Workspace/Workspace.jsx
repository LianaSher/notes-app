import { useContext } from "react";

import { AppContext } from "../../App";

import { NotesForm } from "../NotesForm/NotesForm";
import { dateFormatting } from "../../services";

import { Space, TextWrap } from "./WorkSpace.styled";

export const Workspace = () => {
  const { notes, activeNote, isEdition } = useContext(AppContext);

  const date = activeNote.id ? dateFormatting(activeNote.id) : "";

  if (!notes || !activeNote) {
    return;
  }

  return (
    <Space>
      <p>{date}</p>
      <TextWrap>
        {isEdition ? <NotesForm /> : <p>{activeNote.text}</p>}
      </TextWrap>
    </Space>
  );
};
