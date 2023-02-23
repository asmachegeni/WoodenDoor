import React, { useState } from "react";
import "../style/login.css";
import logo from "../assets/img/logo-big.png";
import { Link, useLocation } from "react-router-dom";
const UserPassword = ({ userType }) => {
  const Location = useLocation();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const showError = () => {
    console.log("error");
  };
  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-wrapper">
          <div className="login">
            <div className="login-logo">
              <img src={logo} alt="login logo" />
            </div>
            <div className="login-header">
              <span className="login-header-title">ورود </span>
            </div>
            <div className="login-email-form">
              <label className="login-label">
                نام کاربری مورد نظر خود را وارد کنید
              </label>
              <input
                type="text"
                className="LoginEmail"
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
                className="LoginEmail"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {username.length >= 3 && password ? (
                <Link
                  className="Login-btn"
                  to={userType === "کارفرما" ? "/Employer" : "/Employee"}
                  state={{
                    email: Location.state.email,
                    password: password,
                    username: username,
                  }}
                >
                  ادامه
                </Link>
              ) : (
                <Link className="Login-btn" onClick={showError}>
                  ادامه
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPassword;
