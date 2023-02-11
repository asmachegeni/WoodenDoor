import "../style/login.css"
import logo from "../assets/logo-big.png"
const Login = () => {
  const userType = "کارفرما"
  return <div className="login-body">
    <div className="login-container">
    <div className="login-wrapper">
      <div className="login">
      <div className="login-logo">
            <img src={logo} alt="login logo"/>
           </div>
           <div className="login-header">
            <span className="login-header-title">
              ورود | ایجاد حساب
            </span>

            <span className="login-user-type">{userType}</span>
           </div>
           <div className="login-email-form">
            <label>
              آدرس ایمیل خودتان را وارد کنید
            </label>
            <input type="email" placeholder="example@gmail.com"/>
            <input type="button" value="ادامه" />
           </div>
      </div>
                 
           <button className="user-switch">
            کارفرما هستید؟
           </button> 
    </div>


   

  </div>
  </div>
  
};


function hamed(){
  
}
export default Login;
