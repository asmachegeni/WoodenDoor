import "../style/login.css";
import logo from "../assets/img/logo-big.png";
import { Link } from "react-router-dom";
const Login = ({ userType }) => {
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
              />
               <label className="login-label">
                رمز عبور خود را وارد کنید
              </label>
              <input
                type="password"
                
                className="LoginEmail"
              />

              <button className="Login-btn">ادامه</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function hamed() {}
export default Login;
