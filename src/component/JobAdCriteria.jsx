import "../style/jobadcriteria.css";
import { FaCheckCircle } from "react-icons/fa";
const JobAdCriteria = () => {
  return (
    <div className="criteria-container">
      <div className="indicators">
        <div className="indicators-title">
          <span>شاخص های کلیدی از نظر کارفرما</span>
        </div>
        <div className="indicators-row">
          <FaCheckCircle className="indicators-row-icon"></FaCheckCircle>
          <span className="indicators-row-span">
            1 سال سابقه کار در گروه شغلی مشابه
          </span>
        </div>
        <div className="indicators-row">
          <FaCheckCircle className="indicators-row-icon"></FaCheckCircle>
          <span className="indicators-row-box">Wordpress - متوسط</span>
          <span className="indicators-row-box">JavaScript - متوسط</span>
        </div>

        <div className="indicators-row">
          <FaCheckCircle className="indicators-row-icon"></FaCheckCircle>
          <span className="indicators-row-span">زبان انگلیسی - متوسط</span>
        </div>
        <div className="indicators-row">
          <FaCheckCircle className="indicators-row-icon"></FaCheckCircle>
          <span className="indicators-row-span">سن: 18 تا 36 سال</span>
        </div>
      </div>
      <div className="criteria-content">
        <div className="criteria-title">
          <span>شرح شغل و وظایف</span>
        </div>
        <p>
          ما در تیم فنی ماورانت، به دنبال جذب یک همکار فعال و با سابقه در حوزه
          پشتیبانی و توسعه وبسایت های وردپرسی هستیم. توانمندی های شغلی مورد
          نیاز: تسلط به طراحی سایت وردپرسی توانایی رفع اشکالات سایت وردپرسی
          آشنایی به SEO و بهینه سازی سایت آشنایی به مفاهیم Responsive توانایی
          کار همزمان در تعداد پروژه زیاد
        </p>
      </div>
      <div className="conditions">
        <div className="conditions-title">
          <span>شرایط احراز شغل</span>
        </div>
        <div className="conditions-container">
          <div className="conditions-row">
            <span>سن</span>
            <span>18 - 36 سال</span>
          </div>
          <div className="conditions-row">
            <span>جنسیت</span>
            <span>
            تفاوتی ندارد

            </span>
          </div>
          <div className="conditions-row">
            <span>زبان</span>
            <div className="conditions-boxes">
            <div className="conditions-box">
              <span>
              انگلیسی
              </span>
              <div className="seprator"></div>
              <span>
              متوسط ۵۰٪
              </span>
            </div>
            <div className="conditions-box">
              <span>
              ترکی
              </span>
              <div className="seprator"></div>
              <span>
              متوسط ۵۰٪
              </span>
            </div>

            </div>
          </div>
          <div className="conditions-row">
            <span>نرم افزار ها</span>
            <div className="conditions-boxes">
            <div className="conditions-box">
              <span>
              WordPress
              </span>
              <div className="seprator"></div>
              <span>
              متوسط ۵۰٪
              </span>
            </div>
            <div className="conditions-box">
              <span>
              VS Code
              </span>
              <div className="seprator"></div>
              <span>
              متوسط ۵۰٪
              </span>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobAdCriteria;
