import "../style/login.css";
import logo from "../assets/img/logo-big.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Axios from "./BaseUrl";
const Register = ({ userType, xsrfToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState("");
  const handelClick = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
      // Axios.post(
      //   "/verification_code/request",
      //   { email: email },
      //   { headers: { "X-XSRF_TOEKN": xsrfToken } }
      // ).then((res) => {
      //   console.log(res);
      // });
    } else {
      setIsValid("f");
    }
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

              <span className="login-user-type">{userType}</span>
            </div>
            <div className="login-email-form">
              <label className="login-label">
                آدرس ایمیل خودتان را وارد کنید
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="LoginEmail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Link
                className="Login-btn"
                state={{ email: email }}
                onClick={handelClick}
                to={"/Code"}
              >
                ثبت نام
              </Link>
            </div>
          </div>
        </div>
        <Link to={"/Login"}> ورود</Link>
      </div>
    </div>
  );
};

export default Register;
