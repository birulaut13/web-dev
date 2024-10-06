import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Import AuthContext
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [role, setRole] = useState(""); // Menambahkan state untuk role
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Fungsi untuk login (simulasi login berdasarkan role)
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "") setUsernameError("Username is required");
    else setUsernameError("");
    if (password === "") setPasswordError("Password is required");
    else setPasswordError("");
    if (role === "") setRoleError("Choose the role");
    else setRoleError("");

    if (username !== "" && password !== "" && role !== "")
      if (username === "asep" && password === "adminasep" && role === "admin") {
        // Misal: cek username dan password dari backend
        login(username, "admin");
        navigate("/admin");
      } else if (
        username === "user" &&
        password === "user123" &&
        role === "user"
      ) {
        login(username, "user");
        navigate("/dashboard");
      } else {
        alert("Username, Password, atau Role salah!");
      }
  };

  return (
    <div className="containers">
      {/* Left Container */}
      <div className="left-containers">
        <h1 className="profile-titles">BANK SAMPAH</h1>
        <div className="welcome-texts">
          <h2>SELAMAT DATANG DI BANK SAMPAH!</h2>
          <p>Ubah barang tidak terpakai menjadi sesuatu yang lebih berharga</p>
        </div>
        <div className="image-containers">
          <img src="image/login.png" alt="Login" />
        </div>
      </div>

      {/* Right Container */}
      <div className="right-containers">
        <h2>Login.</h2>
        <p>
          Don't have an account? <a href="/regist">Sign up</a>
        </p>
        <form onSubmit={handleLogin}>
          {/* Dropdown Role di Atas Username */}
          <div className="input-containers">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="role-selection"
            >
              <option value="">Pilih Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {roleError !== "" ? <p className="errorLogin">{roleError}</p> : null}

          {/* Username Input */}
          <div className="input-containers">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {usernameError !== "" ? (
            <p className="errorLogin">{usernameError}</p>
          ) : null}

          {/* Password Input */}
          <div className="input-containers password-containers">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="show-password-icons"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {passwordError !== "" ? (
            <p className="errorLogin">{passwordError}</p>
          ) : null}

          {/* Checkbox Remember Me */}
          <div className="remembers-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          {/* Button Login */}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
