import React, { useState } from "react";
import "./regist.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    isAggree: false,
  });
  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    isAggree: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = {};

    // Validasi username
    if (data.username === "") {
      errorMessage.username = "Username is required";
    } else {
      errorMessage.username = "";
    }

    if (data.phonenumber === "") {
      errorMessage.phonenumber = "Phone number is required";
    } else {
      errorMessage.phonenumber = "";
    }

    // Validasi password
    if (data.password === "") {
      errorMessage.password = "Password is required";
    } else if (data.password.length < 8 || data.password.length > 12) {
      errorMessage.password =
        "Password minimal 8 karakter dan maksimal 12 karakter";
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{1,}$/.test(data.password)) {
      errorMessage.password = "Password harus memiliki huruf dan angka";
    } else {
      errorMessage.password = "";
    }

    // Validasi confirmPassword
    if (data.confirmPassword !== data.password) {
      errorMessage.confirmPassword = "Password harus sama";
    } else {
      errorMessage.confirmPassword = "";
    }

    if (!data.isAggree) {
      errorMessage.isAggree = "Setujui Persyaratan terlebih dahulu";
    } else {
      errorMessage.isAggree = "";
    }

    // Cek apakah ada error
    const isError = Object.values(errorMessage).some((value) => value !== "");

    if (isError) {
      setError(errorMessage);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="left-container">
        {/* <div className="bank-sampah-title">
          <h2>BANK SAMPAH</h2>
        </div> */}
        <div className="image-container">
          <img src="image/regist.png" alt="Recycle" />
        </div>
        <div className="welcome-text">
          <h2>Starts for free and get</h2>
          <h2>attractive offers</h2>
        </div>
      </div>
      <div className="right-container">
        <h1>Get's started.</h1>
        <p>
          Already have an account? <a href="/">Log in</a>
        </p>
        <p className="or">or</p>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
          </div>
          {error.username !== "" ? (
            <p className="error">{error.username}</p>
          ) : null}
          <div className="input-container">
            <input
              type="text"
              placeholder="No Handphone"
              onChange={(e) =>
                setData({ ...data, phonenumber: e.target.value })
              }
            />
          </div>
          {error.phonenumber !== "" ? (
            <p className="error">{error.phonenumber}</p>
          ) : null}
          <div className="input-container password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button
              type="button"
              className="show-password-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error.password !== "" ? (
            <p className="error">{error.password}</p>
          ) : null}
          <div className="input-container password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
            />
            <button
              type="button"
              className="show-password-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error.confirmPassword !== "" ? (
            <p className="error">{error.confirmPassword}</p>
          ) : null}
          <div className="agree-terms">
            <input
              type="checkbox"
              id="agree"
              onChange={(e) => {
                setData({ ...data, isAggree: !data.isAggree });
              }}
            />
            <label htmlFor="agree">
              I agree to platforms <a href="#">Terms of service</a> and{" "}
              <a href="#">Privacy policy</a>
            </label>
          </div>
          {error.isAggree !== "" ? (
            <p className="error">{error.isAggree}</p>
          ) : null}
          <button onClick={handleSubmit} type="signup">
            Sign up!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
