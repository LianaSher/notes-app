import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";

export const SearchBox = () => {
  const [filter, setFilter] = useState("");

  const { setFiltredNotes, notes } = useContext(AppContext);

  const handleInput = (e) => {
    setFilter(e.target.value);
  };

  const handleBlur = () => {
    setFilter("");
  };

  useEffect(() => {
    const filtredNotes = notes.filter(({ text }) => {
      return text.toLowerCase().includes(filter.toLowerCase());
    });
    setFiltredNotes(filtredNotes);
  }, [notes, setFiltredNotes, filter]);

  return (
    <input
      onBlur={handleBlur}
      onChange={handleInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search"
      name="search"
      value={filter}
    ></input>
  );
};
