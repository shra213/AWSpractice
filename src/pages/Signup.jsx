import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={signup}>Signup</button>
    </div>
  );
}

export default Signup;