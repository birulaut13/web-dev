import React, { useState } from "react";
import "./login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="containers">
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

      {/* Right container */}
      <div className="right-containers">
        <h2>Login.</h2>
        <p>
          Don't have an account? <a href="/regist">Sign up</a>
        </p>
        <form>
          <div className="input-containers">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-containers password-containers">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="show-password-icons"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="remembers-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remembers">Remember me</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
