import "../../style/Blog/ResumeLink.css";
import Image from "../../assets/img/ResumeLink-Image.png";
import { GoPencil } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";

const ResumeLink = () => {
  return (
    <div className="ResumeLink">
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

    </div>
  );
};
export default ResumeLink;
