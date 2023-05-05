import { useState, useEffect, createContext, useContext } from "react";
import { openDB } from "idb";

import "./App.css";

import { Header } from "./components/Header/Header.jsx";
import { SideBar } from "./components/SideBar/SideBar.jsx";
import { Workspace } from "./components/Workspace/Workspace.jsx";

export const AppContext = createContext();

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState("");

  useEffect(() => {
    openDB("notes-app", 1, {
      upgrade(db) {
        db.createObjectStore("notes");
      },
    })
      .then((db) => {
        const tx = db.transaction("notes", "readonly");
        const store = tx.objectStore("notes");

        return store.getAll();
      })
      .then((notes) => {
        console.log(notes);
        setNotes(notes);
      });
  }, []);

  return (
    <AppContext.Provider value={{ notes, activeNote, setActiveNote }}>
      <div>
        <Header />
        <SideBar />
        <Workspace />
      </div>
    </AppContext.Provider>
  );
}

export default App;
