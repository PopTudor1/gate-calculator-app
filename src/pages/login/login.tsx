// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

// Password parts, base64-encoded separately for extra obfuscation
const part1 = "S25pZ2h0"; // base64 for "Knight"
const part2 = "c1hPcmRlcg=="; // base64 for "sXOrder"

function decodeBase64(str: string) {
  try {
    return atob(str);
  } catch {
    return "";
  }
}

// Combine decoded parts to get full password
export const ACCESS_PASSWORD = decodeBase64(part1) + decodeBase64(part2);

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
