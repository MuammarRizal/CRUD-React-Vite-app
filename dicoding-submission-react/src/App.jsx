import React, { useState } from "react";
import { getInitialData } from "./utils";
import NotesList from "./components/NotesList";
import NoteInput from "./components/NoteInput";
import NotesCollection from "./components/NotesCollection";
function App() {
  const [notes, setNotes] = useState(getInitialData());

  const getNotesArsip = () => {
    const notesData = notes.filter((note) => note.archived === true);
    return notesData;
  };

  const getNotesActive = () => {
    const notesData = notes.filter((note) => note.archived === false);
    return notesData;
  };

  const onDeleteHandler = (id) => {
    const noteDelete = notes.filter((note) => note.id !== id);
    setNotes(noteDelete);
  };

  const getNotesUpdate = (note) => {
    setNotes([...notes, { ...note, createdAt: new Date(), id: +new Date(), archived: false }]);
  };

  const onHandleArsip = (id) => {
    const notesArsip = notes.map((note) => {
      if (note.id === id) return { ...note, archived: !note.archived };
      return note;
    });

    setNotes(notesArsip);
  };

  return (
    <>
      <div>
        <div className="note-app__header">
          <NotesCollection notes={notes} title={title} />
        </div>

        <div className="note-app__body">
          <div className="note-input">
            <NoteInput getNotesUpdate={getNotesUpdate} />
          </div>
          <h2>Catatan Aktif</h2>
          <div className="notes-list">
            {getNotesActive().length > 0 ? <NotesList data={getNotesActive()} onDeleteHandler={onDeleteHandler} onHandleArsip={onHandleArsip} /> : <p className="notes-list__empty-message">Tidak ada catatan</p>}
          </div>
          <h2>Arsip</h2>

          <div className="notes-list">{getNotesArsip().length > 0 ? <NotesList data={getNotesArsip()} onDeleteHandler={onDeleteHandler} onHandleArsip={onHandleArsip} /> : <p className="notes-list__empty-message">Tidak ada catatan</p>}</div>
        </div>
      </div>
    </>
  );
}

export default App;
