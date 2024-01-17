import React from "react";
import NotesItem from "./NoteItem";

function NotesList({ data, onDeleteHandler, onHandleArsip }) {
  return (
    <>
      {data.map((note) => {
        return <NotesItem {...note} key={note.id} onDeleteHandler={onDeleteHandler} onHandleArsip={onHandleArsip} />;
      })}
    </>
  );
}

export default NotesList;
