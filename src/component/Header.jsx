import "../style/header.css"
import logo from "../assets/logo.png"
import whitelogo from "../assets/logo-white.png"
const Header = () => {
    return <div className="header-container">
<div className="header-wrapper">
<div className="header-menu">
  <ul>
    <li><a href="">
      بلاگ
      </a></li>
  </ul>
</div>
<div className="header-white-logo">
<img src={whitelogo} alt="" />
</div>
<div className="header-login">
<button id="employee-login">
    ورود / ثبت نام کارجو
</button>
<button id="employer-login">
بخش کارفرمایان
</button>
<div className="seperator"></div>
<div className="header-logo">
  <img src={logo} alt="" />
</div>
</div>
</div>
    </div>;
  };
  export default Header;