import React, { useState } from "react";

function NotesCollection({ title, notes }) {
  const [searchInput, setSearchInput] = useState("");

  const findNotes = notes.filter((note) => {
    note.title.toLowerCase().includes(searchInput.toLocaleLowerCase());
  });
  return (
    <>
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari Catatan" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      </div>
    </>
  );
}

export default NotesCollection;
