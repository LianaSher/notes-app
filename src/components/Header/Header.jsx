import { SearchBox } from "../SearchBox/SearchBox";

export const Header = () => {
  return (
    <header>
      <button>Add</button>
      <button>Delete</button>
      <button>Edit</button>
      <SearchBox />
    </header>
  );
};
