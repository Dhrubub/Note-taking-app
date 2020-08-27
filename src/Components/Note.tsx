import React, { useState, useEffect, Component } from "react";

interface NoteProps {
  note: string;
  index: number;
  onErase: (note: string, index: number) => void;
  onCopy: (note: string, index: number) => void;
}
const Note = (NoteProps: NoteProps) => {
  return (
    <div className="output">
      <p className=" alert-info p-2 textOutput"> {NoteProps.note} </p>
      <button
        className="btn btn-danger buttons"
        id="erase"
        onClick={() => NoteProps.onErase(NoteProps.note, NoteProps.index)}
      >
        Erase
      </button>
      <button
        className="btn btn-warning buttons ml-2 "
        id="copy"
        onClick={() => NoteProps.onCopy(NoteProps.note, NoteProps.index)}
      >
        Copy
      </button>
      {/* <button
        className="btn btn-danger ml-2"
        id="edit"
        onClick={() => NoteProps.onEdit(NoteProps.note, NoteProps.index)}
      >
        Edit
      </button> */}
    </div>
  );
};

export default Note;
