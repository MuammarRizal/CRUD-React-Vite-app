import React, { useState } from "react";
import { showFormattedDate } from "../utils";

function NotesItem({ onDeleteHandler, id, title, createdAt, body, archived, onHandleArsip }) {
  // const [arsip,setArsip] = useState(archived)
  const updateArsip = {
    id: +new Date(),
    title,
    createdAt: +new Date(),
    archived: !archived,
    body,
  };
  const handlerDelete = () => {
    onDeleteHandler(id);
  };

  const onClickArsip = () => {
    onHandleArsip(id);
  };

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{!archived ? showFormattedDate(createdAt) : `Diupdate pada : ${showFormattedDate(createdAt)}`}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={handlerDelete}>
          Delete
        </button>
        <button className="note-item__archive-button" onClick={onClickArsip}>
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default NotesItem;
