import "../style/services.css";
import Service from "./Service";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
const Services = () => {
  return (
    <div className="services-bg">
      <div className="services-container">
        <span className="services-title">
          خدمات سایت استخدامی وودن دور در یک نگاه!
        </span>
        <div className="services-first-row">
          <Service></Service>
          <Service></Service>
          <RiArrowLeftSFill className="services-arrow services-first-row-icon"></RiArrowLeftSFill>
        </div>
        <div className="services-second-row">
          <Service></Service>
          <Service></Service>
          <RiArrowDownSFill className="services-arrow services-second-row-icon1"></RiArrowDownSFill>
          <RiArrowRightSFill className="services-arrow services-second-row-icon2"></RiArrowRightSFill>
        </div>
        <div className="services-third-row">
          <Service></Service>
          <Service></Service>
          <RiArrowDownSFill className="services-arrow services-third-row-icon1"></RiArrowDownSFill>
          <RiArrowLeftSFill className="services-arrow services-third-row-icon2"></RiArrowLeftSFill>
        </div>
        <div className="services-line"></div>
      </div>
    </div>
  );
};
export default Services;
