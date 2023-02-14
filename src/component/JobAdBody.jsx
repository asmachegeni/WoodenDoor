import "../style/jobadbody.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
const JobAdBody = () => {
  return (
    <div className="job-ad-body">
      <span className="about-title">درباره شرکت</span>
      <div className="first-row">
        <div className="service">
          <span className="service-title">اندازه سازمان</span>
          <span className="service-content">51 تا 200 نفر</span>
        </div>
        <div className="service">
          <span className="service-title">صنعت</span>
          <span className="service-content">
            اینترنت / تجارت الکترونیک / خدمات آنلاین
          </span>
        </div>
        <div className="service">
          <span className="service-title">نوع فعالیت</span>
          <span className="service-content">
            شرکت ایرانی دارای مشتریان داخلی و خارجی
          </span>
        </div>
        <div className="service">
          <span className="service-title">سال تاسیس</span>
          <span className="service-content">1387</span>
        </div>
        <div className="service">
          <span className="service-title">مالکیت</span>
          <span className="service-content">خصوصی</span>
        </div>
      </div>
      <div className="second-row">
        <div className="service">
          <span className="service-title">خدمات و محصولات</span>
          <span className="service-content">آژانس برند سازی پزشکی</span>
        </div>
        <div className="service">
          <span className="service-title">توصیف شرکت</span>
          <span className="service-content">
            شرکت ماورانت به پشتوانه کادری حرفه ای متشکل از جوانان پویا، متخصص،
            با تجربه و منتخب از جامعه درمانی کشور از سال 1387 تا کنون خدمات
            ارزنده ای را جهت آگاه سازی بیماران و پرزنت پتانسیل های پزشکان محترم
            ارائه داده است. با توجه به نیاز روز افزون و رو به رشد بشر به برقراری
            ارتباطات بیش تر به صورت مجازی و مد نظر قراردادن تکنولوژی روز دنیا،
            فعالیتهای این شرکت نیز گسترش پیدا کرده و همه روزه کارشناسان و
            متخصصان بیشتری را به خود جذب می نماید.
          </span>
        </div>
        <div className="service">
          <span className="service-title">مزایا و امکانات رفاهی</span>
          <div className="benefits">
            <div className="benefit">
              <FaCheckCircle className="benefit-icon"></FaCheckCircle>
              <span className="benefit-content">بیمه درمان تکمیلی</span>
            </div>
            <div className="benefit">
              <FaCheckCircle className="benefit-icon"></FaCheckCircle>
              <span className="benefit-content">پزشک سازمانی</span>
            </div>
          </div>
        </div>
      </div>
      <a href="" className="more-services">
        مشاهده سایر موقعیت های شغلی این سازمان
      </a>
      <div className="collapse">
        <span className="collapse-span">توضیحات بیشتر</span>
        <MdKeyboardArrowDown className="collapse-icon"></MdKeyboardArrowDown>
      </div>
    </div>
  );
};
export default JobAdBody;
