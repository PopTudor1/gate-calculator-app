// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_PASSWORD } from "../../utils/login-utils";
import "./login.css";

export default function Login() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // NEW
  const navigate = useNavigate();

  const handleLogin = () => {
    if (input === ACCESS_PASSWORD) {
      localStorage.setItem("isAuthorized", "true");
      navigate("/gate-comparator");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-title">Guild Access</h1>
      <div className="login-input-container">
        <input
          className="login-input"
          type={showPassword ? "text" : "password"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter guild password"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          className="login-view-button"
          title={showPassword ? "Hide password" : "View password"}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>

      <button className="login-button" onClick={handleLogin}>
        Enter
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
