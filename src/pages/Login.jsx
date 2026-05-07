import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-80 bg-white p-6 rounded-xl shadow-md">

        <h1 className="text-2xl font-bold text-center mb-5">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          onClick={login}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className="text-center mt-3 text-sm">
          New User?{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;