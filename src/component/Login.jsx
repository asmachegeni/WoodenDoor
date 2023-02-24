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
              <span className="login-header-title">ورود | ایجاد حساب</span>

              <span className="login-user-type">{userType}</span>
            </div>
            <div className="login-email-form">
              <label>آدرس ایمیل خودتان را وارد کنید</label>
              <input type="email" placeholder="example@gmail.com" />
              <input type="button" value="ادامه" />
            </div>
          </div>
          <button className="user-switch">
            {userType === "کارجو" ? "کارفرما" : "کارجو"} هستید؟
          </button>
        </div>
      </div>
    </div>
  );
};

function hamed() {}
export default Login;
