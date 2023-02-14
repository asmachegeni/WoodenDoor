import "../style/jobads.css"
import {IoMdBriefcase} from "react-icons/io"
import JobAd from "./JobAd"
const JobAds = () => {
    return <div className="job-ads-body">
 <span className="job-ads-title">
 تازه‌ترین آگهی‌های شغلی برای شما
 </span>
<div className="new-jobs-title-container">
  <div className="new-jobs-title-wrapper">
<IoMdBriefcase className="title-icon"></IoMdBriefcase>
<span className="title-span">
  جدیدترین مشاغل
</span>
  </div>
</div>
<div className="jobs-count">
  <span>
    56813
  </span>
  <span>
    موقعیت شغلی
  </span>

</div>
<div className="job-ads">
<JobAd ></JobAd>
<JobAd ></JobAd>
<JobAd ></JobAd>
<JobAd ></JobAd>
<JobAd ></JobAd>
<JobAd ></JobAd>
</div>
    </div>;
  };
  export default JobAds;