import React, { useState } from "react";
import JobAd from "../JobAd";
const JobAdCompany = () => {
  const [data, setData] = useState([1, 2, 3, 4]);
  return <div>{data && data.map((d, index) => <JobAd key={index} />)}</div>;
};
export default JobAdCompany;
