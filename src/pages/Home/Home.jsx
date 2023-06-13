import React, { useState } from "react";
import "./Home.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="home-main">
      <div className="home-container">
        <img id="login-img"
          src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1686586617/NegProjects/SocialMedia/undraw_social_sharing_re_pvmr_srlnml.svg"
          alt=""
        />

        <div className="login">
          <div className="login-container">
            <h1>ShareMate</h1>
            <div className="login-form">
              <label>username:</label>
              <input type="text" />
              <div className="password-container">
                <label htmlFor="">password:</label>
                <div className="input-pass-div">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input-password"
                  />{" "}
                  <span
                    id="password-eye"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </span>
                </div>
              </div>
              {/* <div className="login-buttons"> */}
                <button>Login</button>
                <button>Login as Guest</button>
              {/* </div> */}
              <div className="signup-nav">Don't have an account? <a href="/">Sign up here</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
