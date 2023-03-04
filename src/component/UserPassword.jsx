import React, { useState, useEffect } from "react";
import "../style/UserPassword.css";
import logo from "../assets/img/logo-big.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
const UserPassword = ({ userType }) => {
  const Location = useLocation();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const showError = () => {
    console.log("error");
  };
  useEffect(() => {
    console.log(Location.state);
  });
  const switchPage = () => {
    if (Location.state.type == "false") {
      navigate("/Employer", {
        state: {
          email: Location.state.email,
          password: password,
          username: username,
          type: Location.state.type,
        },
      });
    } else {
      navigate("/Employee", {
        state: {
          email: Location.state.email,
          password: password,
          username: username,
          type: Location.state.type,
        },
      });
    }
  };
  return (
    <div className="UserPassword">
      <div className="UserPasswordContainer">
        <div className="UserPasswordWrapper">
          <div className="UserPasswordBody">
            <div className="Logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="Header">
              <span>ورود به حساب </span>
            </div>
            <div className="Form">
              <label>نام کاربری مورد نظر خود را وارد کنید</label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <label className="login-label">
                رمز عبور مورد نظر خود را وارد کنید
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {username.length >= 3 && password ? (
                <button className="Login-btn" onClick={switchPage}>
                  ادامه
                </button>
              ) : (
                <button className="Login-btn" onClick={showError}>
                  ادامه
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPassword;
