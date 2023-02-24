import "../style/Register.css";
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
    <div className="Register">
      <div className="RegisterContainer">
        <div className="RegisterWrapper">
          <div className="RegisterBody">
            <div className="Logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="Header">
              <span>ثبت نام </span>
              <span className="UserType">{userType}</span>
            </div>
            <div className="Form">
              <label>آدرس ایمیل خودتان را وارد کنید</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <Link state={{ email: email }} onClick={handelClick} to={"/Code"}>
                ثبت نام
              </Link>
              
            </div>
          </div>
          <Link to={"/Login"}> ورود</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
