import "../style/resumepopup.css"
import {FiPaperclip} from "react-icons/fi"
const ResumePopUp = () => {
    return <div className="resume-bg">
<div className="popup-container">
    <div className="popup-wrapper">
        <span className="popup-title">
            ارسال رزومه
        </span>
        <div className="phone-container">
            <span className="phone-title">
                شماره تلفن همراه خودتان را وارد کنید:
            </span>
            <input type="text" className="phone-number" placeholder="09210000000"/>
        </div>
        <div className="description-container">
            <span className="description-title">
                توضیحات اضافی:
            </span>
            <textarea type="text" className="description-content" placeholder="توضیحات..."/>
        </div>
        <div className="check-attach">
            <input type="checkbox" id="check"/>
            <label className="check-label" For="check">رزومه آماده داری؟</label>
        </div>
        <div className="attachment-container">
            <div className="file">
                            <FiPaperclip className="file-icon"></FiPaperclip>
            <span className="file-name">
                MyResume.pdf
            </span>
            </div>

            <button className="file-select-btn">
                انتخاب فایل
            </button>
        </div>
        <button className="send-resume-btn"> ارسال رزومه </button>
    </div>
</div>
    </div>;
  };
  export default ResumePopUp;