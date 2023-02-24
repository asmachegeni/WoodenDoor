import "../style/UserPassword.css";
import logo from "../assets/img/logo-big.png";
import { Link } from "react-router-dom";

const UserPassword = ({userType}) => {
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
              <label>
                نام کاربری مورد نظر خود را وارد کنید
              </label>
              <input type="text"/>
              <label>
                رمز عبور مورد نظر خود را وارد کنید
              </label>
              <input type="password"/>
              <Link
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
