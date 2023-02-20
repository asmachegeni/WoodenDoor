import "../style/jobads.css";
import { IoMdBriefcase } from "react-icons/io";
import JobAd from "./JobAd";
import { useState } from "react";
const JobAds = () => {
  const [jobAds, setJobAds] = useState([
    {
      titleJob: "کارشناس آی تی",
      name: "ودن در",
      location: "همدان",
      type: "دور کاری",
      date: "امروز",
      salay: "بین 12 تا16 میلیون",
      score: "4.1",
    },
    {
      titleJob: "کارشناس آی تی",
      name: "ودن در",
      location: "همدان",
      type: "دور کاری",
      date: "امروز",
      salay: "بین 12 تا16 میلیون",
      score: "4.1",
    },
    {
      titleJob: "کارشناس آی تی",
      name: "ودن در",
      location: "همدان",
      type: "دور کاری",
      date: "امروز",
      salay: "بین 12 تا16 میلیون",
      score: "4.1",
    },
    {
      titleJob: "کارشناس آی تی",
      name: "ودن در",
      location: "همدان",
      type: "دور کاری",
      date: "امروز",
      salay: "بین 12 تا16 میلیون",
      score: "4.1",
    },
    {
      titleJob: "کارشناس آی تی",
      name: "ودن در",
      location: "همدان",
      type: "دور کاری",
      date: "امروز",
      salay: "بین 12 تا16 میلیون",
      score: "4.1",
    },
    {
      titleJob: "کارشناس آی تی",
      name: "ودن در",
      location: "همدان",
      type: "دور کاری",
      date: "امروز",
      salay: "بین 12 تا16 میلیون",
      score: "4.1",
    },
  ]);
  return (
    <div className="job-ads-body">
      <span className="job-ads-title">تازه‌ترین آگهی‌های شغلی برای شما</span>
      <div className="new-jobs-title-container">
        <div className="new-jobs-title-wrapper">
          <IoMdBriefcase className="title-icon"></IoMdBriefcase>
          <span className="title-span">جدیدترین مشاغل</span>
        </div>
      </div>
      <div className="jobs-count">
        <span>56813</span>
        <span>موقعیت شغلی</span>
      </div>
      <div className="job-ads">
        {
          jobAds.map((jobad)=>{return<JobAd JobAd={jobad}/>})
        }
      </div>
    </div>
  );
};
export default JobAds;
