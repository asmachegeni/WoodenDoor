import "../style/login.css";
import logo from "../assets/img/logo-big.png";
import { Link, useLocation } from "react-router-dom";
import Axios from "./BaseUrl";
import { useState } from "react";
const Code = () => {
  const Location = useLocation();
  const [code, setCode] = useState("");
  const handeleClick = () => {
    // Axios.post("/api/verification_code/verify", {
    //   email: Location.state.email,
    //   code: code,
    // });
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
                <Link
                  className="Login-btn"
                  to={"/UserPassword"}
                  onClick={handeleClick}
                >
                  ادامه
                </Link>
              </div>
            </div>
          </div>
          <Link to={"/Login"}> ورود</Link>
        </div>
      </div>
    </div>
  );
};
export default Code;
