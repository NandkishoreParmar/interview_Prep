import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) fetchNotes();
  }, [user]);

  // Add these functions inside Dashboard component
  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  const updateNote = async (id, updatedData) => {
    try {
      await axios.patch(`/api/notes/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  // Modify the notes list rendering

  const fetchNotes = async () => {
    try {
      const res = await axios.get("/api/notes", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/notes",
        { title, content },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      fetchNotes();
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>My Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
