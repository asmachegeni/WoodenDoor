import React, { useState } from "react";
import JobAd from "../JobAd";
import "../../style/Panels/JobAdCompany.css" 
const JobAdCompany = () => {
  const [data, setData] = useState([1, 2, 3, 4]);
  return <div className="JobAdCompany">{data && data.map((d, index) => <JobAd key={index} />)}</div>;
};
export default JobAdCompany;
