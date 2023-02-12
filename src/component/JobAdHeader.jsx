import "../style/jobadheader.css";
import header from "../assets/img/default-companyHeader.jpeg";
import logo from "../assets/img/default-companyLogo.jpg";
import { BsHeart } from "react-icons/bs";
import { HiOutlineShare } from "react-icons/hi";
import { SlArrowLeft } from "react-icons/sl";
const JobAdHeader = () => {
  return (
    <div className="ad-header-container">
      <img className="header-cover" src={header} />
      <div className="ad-header-wrapper">
        <div className="row1">
          <div className="company-img">
            <img src={logo} />
          </div>
          <div className="row1-content">
            <div className="row1-content-row">
              <div className="job-title-container">
                <span className="job-title">
                  کارشناس پشتیبانی و توسعه وردپرس
                </span>
                <span className="ad-age">(5 روز پیش)</span>
              </div>
              <div className="icons-container">
                <a href="">
                  <HiOutlineShare className="share-icon"></HiOutlineShare>
                </a>
                <a href="">
                  <BsHeart className="like-icon"></BsHeart>
                </a>
              </div>
            </div>
            <div className="row1-content-row">
              <span className="company-name">آنومالی</span>
            </div>
            <div className="row1-content-row">
              <span className="address">تهران، آیت الله کاشانی</span>
              <span className="cooperation-type">تمام وقت</span>
            </div>
          </div>
        </div>
        <div className="row2">
          <div>
            <span>آدرس</span>
            <p>تهران، آیت الله کاشانی</p>
          </div>
          <div>
            <span>نوع همکاری</span>
            <p>تمام وقت</p>
          </div>
          <div>
            <span>روز و ساعت کاری</span>
            <p>شنبه تا چهارشنبه 9 الی 17:15-پنجشنبه ها 9 الی 13:15</p>
          </div>
          <div>
            <span>سفر های کاری</span>
            <p>-</p>
          </div>

          <div>
            <span>مزایا و تسهیلات</span>
            <p>بیمه درمان تکمیلی - پزشک سازمانی</p>
          </div>
        </div>
      </div>
      <div className="sticky-job-header">
        <div className="sticky-icons-container">
          <a href="">
            <BsHeart></BsHeart>
          </a>
          <a href="">
            <HiOutlineShare></HiOutlineShare>
          </a>
        </div>
        <div className="sticky-title-container">
          <span>کارشناس پشتیبانی و توسعه وردپرس</span>
          <span>آنومالی</span>
        </div>
        <div className="sticky-back-button-container">
          <a href="">
            <SlArrowLeft></SlArrowLeft>
          </a>
        </div>
      </div>
    </div>
  );
};
export default JobAdHeader;
