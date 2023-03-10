import "../style/login.css";
import logo from "../assets/img/logo-big.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AxiosUrl from "./BaseUrl";
import axios from "axios";
import { useState, useEffect } from "react";
import "../style/Code.css"
const Code = () => {
  const Location = useLocation();
  useEffect(() => {
    console.log(Location.state);
    console.log(typeof Location.state.type)
  });
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const handeleClick = () => {
    console.log(Location.state.email, code);
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
            "http://37.32.4.134/api/verification_code/verify",
            {
              code: code,
              email: Location.state.email,
            },
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
            console.log(res);
            if (res.status == 200) {
              navigate("/UserPassword", {
                state: {
                  email: Location.state.email,
                  type: Location.state.type,
                },
              });
            }
          })
          .catch((err) => console.log(err));
      });

    console.log(code);
  };
  return (
    <div>
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
                  کد ارسالی به ایمیل خود را وارد کنید
                </label>
                <input
                  type="number"
                  className="LoginEmail"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
                <button className="Login-btn" onClick={handeleClick}>
                  ادامه
                </button>
              </div>
            </div>
          </div>
          {/* <Link to={"/Login"}> ورود</Link> */}
        </div>
      </div>
    </div>
  );
};
export default Code;