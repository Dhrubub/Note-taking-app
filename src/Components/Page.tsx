import React, {
  useState,
  useEffect,
  Component,
  EventHandler,
  KeyboardEventHandler,
  KeyboardEvent,
} from "react";
import Note from "./Note";

const Page = () => {
  //  Array containing all the created notes
  const [notes, setNotes] = useState<Array<string>>([]);
  const [deleted, setDeleted] = useState<Array<string>>([]);

  //  Array to store the text from input
  const [text, setText] = useState("");

  const [instructionNote, setInstructionNote] = useState("Instructions ... hi");

  //  Adds a new note element
  function handleSubmit() {
    if (text.replace(/\s+$/, "") !== "") {
      setNotes([...notes, text]);
      setText("");
    }
  }

  //  Removes the specified note element
  function handleErase(note: string, index: number) {
    setDeleted([...deleted, note]);
    setNotes(notes.filter((current, id) => id !== index));
  }

  function handleEraseAll() {
    setDeleted(deleted.concat(notes));
    setNotes([]);
    console.log(deleted.length);
  }

  // function handleEdit(note: string, index: number) {
  //   setText("editted");
  // }

  function handleRecover() {
    console.log(deleted.length);
    if (deleted.length > 0) {
      setNotes([...notes, deleted[0]]);
      setDeleted(deleted.filter((item) => item !== deleted[0]));
    } else {
      window.confirm("No notes to recover.");
    }
  }

  function handleClearHistory() {
    if (window.confirm("Are you sure you want to clear your history?"))
      setDeleted([]);
  }

  function handleCopy(note: string, index: number) {
    if (text.replace(/\s+$/, "") !== "") {
      if (
        window.confirm("Are you sure you want to overwrite your current note?")
      )
        setText(note);
    } else setText(note);
  }

  return (
    <div className="page">
      <div className="input">
        <textarea
          className="textInput"
          value={text}
          rows={5}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          className="submit btn btn-success buttons"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
        <button
          className="btn btn-danger ml-2 eraseAll buttons right"
          onClick={() => {
            if (window.confirm("Are you sure you wish to erase all notes?"))
              handleEraseAll();
          }}
        >
          Erase All
        </button>
        <button
          className="btn btn-danger ml-2 clear buttons right"
          onClick={() => {
            handleClearHistory();
          }}
        >
          Clear History
        </button>
        <button
          className="btn btn-warning ml-2 recover buttons right"
          onClick={() => {
            handleRecover();
          }}
        >
          Recover
        </button>
      </div>

      {/* {instructionNote ? (
        <Note
          note="Instructions ... lorem ipsum"
          index={-99}
          onErase={() => setInstructionNote(undefined)}
        />
      ) : null} */}

      {/* Maps the string from notes to an unordered list */}
      <ul className="list">
        {notes
          .map((note, index) => (
            <li key={index}>
              <Note
                note={note}
                index={index}
                onErase={(note, index) => handleErase(note, index)}
                onCopy={(note, index) => handleCopy(note, index)}
                // onEdit={(note, index) => handleEdit(note, index)}
              />
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default Page;
