import "../style/Register.css";
import logo from "../assets/img/logo-big.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AxiosUrl from "./BaseUrl";
import axios from "axios";
const Register = ({ userType = "کارجو" }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  let [isValid, setIsValid] = useState(0);
  const handelClick = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
      console.log("here");
      AxiosUrl.defaults.withCredentials = true;
      axios
        .get("http://37.32.4.134/sanctum/csrf-cookie", {
          headers: {
            credentials: "same-origin",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers":
              "X-Requested-With,Content-Type,X-Token-Auth,Authorization",
            "Access-Control-Allow-Methods": "*",
          },
        })
        .then(() => {
          axios
            .post(
              "http://37.32.4.134/api/verification_code/request",
              { email: email },
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  credentials: "same-origin",
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Credentials": true,
                  "Access-Control-Allow-Headers":
                    "X-Requested-With,Content-Type,X-Token-Auth,Authorization",
                  "Access-Control-Allow-Methods": "*",
                },
              }
            )
            .then((res) => {
              console.log(res.status);
              if (res.status == 200) {
                let temp;
                if (userType === "کارفرما") {
                  temp = "false";
                } else {
                  temp = "true";
                }
                console.log("--------------", email, temp);
                navigate("/Code", { state: { email: email, type: temp } });
              }
            })
            .catch((err) => console.log(err));
        });
    } else {
      console.log("email is not valid!");
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
              <button onClick={handelClick}>ثبت نام</button>
            </div>
          </div>
          <Link to={"/Login"}> ورود</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
