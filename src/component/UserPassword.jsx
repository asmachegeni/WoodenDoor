import "../style/login.css";
import logo from "../assets/img/logo-big.png";
import { Link } from "react-router-dom";

const UserPassword = ({userType}) => {
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
              <input type="text" className="LoginEmail" />
              <label className="login-label">
                رمز عبور مورد نظر خود را وارد کنید
              </label>
              <input type="password" className="LoginEmail" />
              <Link
                className="Login-btn"
                to={userType === "کارفرما" ? "/Employer" : "/Employee"}
              >
                {" "}
                ادامه
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPassword;
