import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import "./../style/SendingResume.css";
const SendingResume = ({ isLogin = true }) => {
  return (
    <div className="SendingResume">
      <div
        className={
          isLogin ? "SendingResumeContainer" : "SendingResumeContainerLock"
        }
      >
        <span className={isLogin ? "SendingResumeView" : "SendingResumeLock"}>
          {isLogin ? "مشاهده رزومه" : "برای ارسال رزومه وارد حساب خود شوید"}
        </span>
        {isLogin ? (
          <AiOutlineArrowLeft className="SendingResumeIcon" />
        ) : (
          <FaLock className="SendingResumeLockIcon" />
        )}
      </div>
      <button
        className="SendingResumeBtn"
        onClick={() => {
          console.log("click");
        }}
      >
        ارسال رزومه
      </button>
    </div>
  );
};
export default SendingResume;
