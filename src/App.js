import { useState, useEffect, createContext } from "react";
import { openDB } from "idb";

import "./App.css";

import { Header } from "./components/Header/Header.jsx";
import { SideBar } from "./components/SideBar/SideBar.jsx";
import { Workspace } from "./components/Workspace/Workspace.jsx";

export const AppContext = createContext();

function App() {
  const [db, setDb] = useState(null);
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});
  const [isEdition, setIsEdition] = useState(false);

  useEffect(() => {
    async function openDatabase() {
      const version = 1;
      const dbName = "myDatabase";
      const existingDB = await window.indexedDB.databases();
      const needUpgrade = existingDB.find(
        (db) => db.name === dbName && db.version < version
      );

      if (needUpgrade) {
        await window.indexedDB.deleteDatabase(dbName);
      }

      const idb = await openDB(dbName, version, {
        upgrade(db) {
          db.createObjectStore("myObjectStore", { keyPath: "id" });
        },
      });
      setDb(idb);
    }

    openDatabase();
  }, []);

  useEffect(() => {
    async function fetchNotesFromDB() {
      if (!db) {
        return;
      }
      try {
        const transaction = db.transaction("myObjectStore", "readonly");

        const objectStore = transaction.objectStore("myObjectStore");

        const allNotes = await objectStore.getAll();

        setNotes(allNotes);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNotesFromDB();
  }, [db]);

  useEffect(() => {
    async function updateNoteText() {
      if (!db || !activeNote) {
        return;
      }
      try {
        const transaction = db.transaction("myObjectStore", "readwrite");
        const objectStore = transaction.objectStore("myObjectStore");
        const note = notes.find((note) => note.id === activeNote.id);
        await objectStore.put({ ...note, text: activeNote.text });
      } catch (error) {
        console.error(error);
      }
    }
    updateNoteText();
  }, [db, activeNote, notes]);

  const addItem = async () => {
    const transaction = db.transaction("myObjectStore", "readwrite");
    const objectStore = transaction.objectStore("myObjectStore");
    const newItem = { id: `${new Date().getTime()}`, text: "hello" };
    await objectStore.add(newItem);
    setNotes([...notes, newItem]);
  };

  return (
    <AppContext.Provider
      value={{
        notes,
        activeNote,
        setActiveNote,
        addItem,
        isEdition,
        setIsEdition,
      }}
    >
      <div>
        <Header />
        <SideBar />
        <Workspace />
      </div>
    </AppContext.Provider>
  );
}

export default App;
