import "../../style/Blog/ResumeLink.css";
import Image from "../../assets/img/ResumeLink-Image.png";
import { GoPencil } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResumeLink = () => {
  return (
    <div className="ResumeLink">
<<<<<<< HEAD
      <Link to={"/CreateResume"}>
        <div className="Container">
          <div className="Right">
            <div className="Header">
              <div className="Title">
                <GoPencil className="Icon"></GoPencil>
                <span>رزومه خوبی نداری؟</span>
              </div>
              <div className="Pointer">
                <span>ساخت سریع رزومه</span>
                <BsArrowLeft className="Icon"></BsArrowLeft>
              </div>
            </div>
            <div className="Content">
              <span>
                در 4 مرحله رزومه 2 زبانه خودت را کامل بساز و برای شرکت ها ارسال
                کن!
              </span>
            </div>
          </div>
          <div className="Left">
            <img src={Image} />
          </div>
        </div>
      </Link>
=======
        <a href="#">
              <div className="ResumeLink-Container">
        <div className="ResumeLink-Right">
          <div className="ResumeLink-Header">
            <div className="ResumeLink-Title">
              <GoPencil className="ResumeLink-Icon"></GoPencil>
              <span>رزومه خوبی نداری؟</span>
            </div>
            <div className="ResumeLink-Pointer">
              <span>ساخت سریع رزومه</span>
              <BsArrowLeft className="ResumeLink-Icon"></BsArrowLeft>
            </div>
          </div>
          <div className="ResumeLink-Content">
            <span>
              در 4 مرحله رزومه 2 زبانه خودت را کامل بساز و برای شرکت ها ارسال
              کن!
            </span>
          </div>
        </div>
        <div className="ResumeLink-Left">
          <img src={Image} />
        </div>
      </div>    
        </a>

>>>>>>> 16f49f7a200eea453ab2bed902c238b215eb2f2b
    </div>
  );
};
export default ResumeLink;
