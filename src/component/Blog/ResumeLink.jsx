import "../../style/Blog/ResumeLink.css";
import Image from "../../assets/img/ResumeLink-Image.png";
import { GoPencil } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";

const ResumeLink = () => {
  return (
    <div className="ResumeLink">
        <a href="#">
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
        </a>

    </div>
  );
};
export default ResumeLink;
