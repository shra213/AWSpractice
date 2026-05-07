import { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

import { signOut , onAuthStateChanged} from "firebase/auth";

import { auth, db } from "../firebase/firebaseConfig";

import { useNavigate } from "react-router-dom";

function Home() {

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (!user) {

        navigate("/");

      } else {

        fetchNotes();

      }

      setLoading(false);
    });

    return () => unsubscribe();

  }, []);
  // Add Note
  const addNote = async () => {

    if (note === "") return;

    await addDoc(collection(db, "notes"), {
      text: note,
      uid: auth.currentUser.uid,
    });

    setNote("");

    fetchNotes();
  };

  // Fetch Notes
  const fetchNotes = async () => {

    const snapshot = await getDocs(collection(db, "notes"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setNotes(data);
  };

  // Load Notes
  useEffect(() => {
    fetchNotes();
  }, []);

  // Delete Note
  const deleteNote = async (id) => {

    await deleteDoc(doc(db, "notes", id));

    fetchNotes();
  };

  // Logout
  const logout = async () => {

    await signOut(auth);

    navigate("/");
  };

  return (
    <div>

      <h1>Notes App</h1>

      <button onClick={logout}>
        Logout
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Write Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>
        Add
      </button>

      <ul>
        {notes.map((item) => (

          <li key={item.id}>

            {item.text}

            <button onClick={() => deleteNote(item.id)}>
              Delete
            </button>

          </li>

        ))}
      </ul>

    </div>
  );
}

export default Home;