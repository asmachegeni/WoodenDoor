import React, { useState } from "react";
import "../style/login.css";
import logo from "../assets/img/logo-big.png";
import { useNavigate } from "react-router-dom";
import AxiosUrl from "./BaseUrl";
const Login = ({ userType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const LoginUser = () => {
    console.log("here");
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
      let temp;

      if (userType == "کارفرما") {
        temp = "false";
      } else {
        temp = "true";
      }
      console.log(temp, password, email);
      AxiosUrl.defaults.withCredentials = true;
      AxiosUrl.get("/sanctum/csrf-cookie", {
        headers: {
          credentials: "same-origin",
        },
      }).then((res) => {
        AxiosUrl.post(
          "/api/sign-in",
          { email: email, password: password, type: temp },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              credentials: "same-origin",
            },
          }
        )
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
              localStorage.setItem("token", `Bearer ${res.data.access_token}`);
              localStorage.setItem("id", res.data.user.id);
              console.log(res.data.user.id);
              if (userType == "کارفرما") {
                navigate("/EmployerPanel", { state: { id: res.data.user.id } });
              } else if (userType == "کارجو")
                navigate("/EmployeePanel", { state: { id: res.data.user.id } });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
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
              <label>آدرس ایمیل خودتان را وارد کنید</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="LoginEmail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label>رمز عبور خود را وارد کنید</label>
              <input
                type="password"
                className="LoginPassl"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button className="Login-btn" onClick={LoginUser}>
                ورود
              </button>
            </div>
          </div>
          <button
            className="user-switch"
            onClick={() => {
              navigate("/Register");
            }}
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
