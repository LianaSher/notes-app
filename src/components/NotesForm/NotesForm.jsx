import { useContext } from "react";

import { AppContext } from "../../App";

export const NotesForm = () => {
  const { notes, activeNote, setActiveNote } = useContext(AppContext);

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <label>
        <textarea
          onChange={handleInput}
          name="text"
          wrap="soft"
          //   value={activeNoteObj.text}
        ></textarea>
      </label>
      <button>save</button>
    </form>
  );
};
