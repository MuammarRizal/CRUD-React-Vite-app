import React, { useState } from "react";

function NoteInput({ getNotesUpdate }) {
  const [createNote, setCreateNote] = useState();

  const onChangeHandler = (e) => {
    setCreateNote({ ...createNote, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(createNote);
    getNotesUpdate(createNote);
  };
  return (
    <>
      <h2>Buat catatan</h2>
      <form onSubmit={onSubmitForm}>
        <p className="note-input__title__char-limit">Sisa karakter: 50</p>
        <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required="" name="title" onChange={onChangeHandler} />
        <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required="" name="body" onChange={onChangeHandler}></textarea>
        <button type="submit">Buat</button>
      </form>
    </>
  );
}

export default NoteInput;
