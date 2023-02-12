import "../style/services.css";
import Service from "./Service";
import {RiArrowLeftSFill} from "react-icons/ri";
import {RiArrowRightSFill} from "react-icons/ri";
import {RiArrowDownSFill} from "react-icons/ri";
const Services = () => {
  return (
    <div className="services-bg">
      <div className="services-container">
        <span className="services-title">خدمات سایت استخدامی وودن دور در یک نگاه!</span>
        <div className="first-row">
         <Service></Service>
         <Service></Service>
         <RiArrowLeftSFill className="arrow first-row-icon"></RiArrowLeftSFill>
        </div>
        <div className="second-row">
        <Service></Service>
         <Service></Service>
         <RiArrowDownSFill className="arrow second-row-icon1"></RiArrowDownSFill>
         <RiArrowRightSFill className="arrow second-row-icon2"></RiArrowRightSFill>
        </div>
        <div className="third-row">
        <Service></Service>
         <Service></Service>
         <RiArrowDownSFill className="arrow third-row-icon1"></RiArrowDownSFill>
         <RiArrowLeftSFill className="arrow third-row-icon2"></RiArrowLeftSFill>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};
export default Services;
