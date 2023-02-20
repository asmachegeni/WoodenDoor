import "../style/header.css";
import logo from "../assets/img/logo.png";
import whitelogo from "../assets/img/logo-white.png";
import { Link } from "react-router-dom";
const Header = ({ setType }) => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-menu">
          <ul>
            <li>
              <Link className="header-blog" to={"/"}>
                بلاگ
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-white-logo">
          <img src={whitelogo} alt="" />
        </div>
        <div className="header-login">
          <Link
            id="header-employee-login"
            to={"/Login"}
            onClick={() => {
              setType("کارجو");
            }}
          >
            ورود / ثبت نام کارجو
          </Link>
          <Link
            id="header-employer-login"
            to={"/Login"}
            onClick={() => {
              setType("کارفرما");
            }}
          >
            بخش کارفرمایان
          </Link>
          <div className="seperator"></div>
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
