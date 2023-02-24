import React, { useState } from "react";
import "../style/UserPassword.css";
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
