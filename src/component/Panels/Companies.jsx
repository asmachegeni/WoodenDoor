import React, { useState } from "react";
import CompanyView from "./CompnayView";
const Companies = () => {
  const [d, setD] = useState([1, 2, 3, 4]);
  return (
    <div>
      {d &&
        d.map((item, index) => {
          return <CompanyView key={index} />;
        })}
    </div>
  );
};
export default Companies;
