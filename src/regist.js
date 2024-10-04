import React, { useState } from 'react';
import './regist.css';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <input type="text" placeholder="No Handphone" required />
          </div>
          
          <div className="input-container password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="show-password-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="input-container password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <button
              type="button"
              className="show-password-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="agree-terms">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I agree to platforms <a href="#">Terms of service</a> and <a href="#">Privacy policy</a></label>
          </div>

          <button type="signup">Sign up!</button>
        </form>
      </div>
    </div>
  );
}

export default Register;