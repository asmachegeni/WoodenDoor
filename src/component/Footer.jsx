import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../style/footer.css";
import logo from "../assets/img/logo-white.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-rowup">
          <div className="footer-col1">
            <p>
              جاب‌ویژن بعنوان اولین ارائه دهنده بسته جامع خدمات کاریابی و
              استخدام، تجربه برگزاری موفق ادوار مختلف نمایشگاه‌های کار شریف و
              ایران را در کارنامه کاری خود دارد. سیستم هوشمند انطباق، رزومه ساز
              دو زبانه، تست‌های خودشناسی، ارتقای توانمندی‌ها به کمک پیشنهاد
              دوره‌های آموزشی و همکاری با معتبرترین سازمان‌ها برای استخدام از
              ویژگی‌های متمایز جاب‌ویژن است.
            </p>
          </div>
          <div className="footer-col2">
            <p>جاب‌ویژن محصولی دانش بنیان شناخته شده است.</p>
            <br />
            <p>
              دارای مجوز رسمی کاریابی الکترونیکی از وزارت کار، تعاون و رفاه
              اجتماعی
            </p>
          </div>
        </div>
        <div className="footer-rowdown">
          <div className="footer-col1">
            <img src={logo} alt="" />
          </div>
          <div className="footer-col2">
            {/* <a href=""> */}
              <FaTwitter className="footer-social"></FaTwitter>
            {/* </a> */}
            {/* <a href=""> */}
              <FaTelegramPlane className="footer-social"></FaTelegramPlane>
            {/* </a> */}
            {/* <a href=""> */}
              <FaLinkedin className="footer-social"></FaLinkedin>
            {/* </a> */}
            {/* <a href=""> */}
              <FaInstagram className="footer-social"></FaInstagram>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
