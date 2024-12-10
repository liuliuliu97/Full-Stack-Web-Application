import { useEffect, useState } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  //get all the notes that are requested
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  //get all the notes
  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((response) => response.data)
      .then((data) => { setNotes(data); console.log(data); })
      .catch((error) => console.log(error));
  };

  //delete the note
  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((respoonse) => {
        // 204 is the status code for successful deletion
        if (respoonse.status === 204) {
          alert("Note deleted");
        } else {
          alert("Error in deleting the note");
        }
        // get the notes again to show the updated list
        getNotes();
      })
      .catch((error) => alert(error));
  };

  //create a new note
  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { title, content })
      .then((response) => {
        if (response.status === 201) {
          alert("Note created");
        } else {
          alert("Error in creating the note");
        }
        getNotes();
      }).catch((error) => alert(error));
  };

  return (
    <div>
      {/* display the notes  */}
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}

        {/* form to create a note */}
        <h2>Create a Note</h2>
        <form onSubmit={createNote}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content">Content:</label>
          <br />
          <textarea
            id="content"
            name="content"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <input type="submit" value="Submit" />
          {/* <button type="submit">Create</button> */}
        </form>
      </div>
    </div>
  );
}

export default Home;