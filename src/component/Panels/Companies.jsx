import React, { useState } from "react";
import CompanyView from "./CompnayView";
import "../../style/Panels/Companies.css";
const Companies = () => {
  const [d, setD] = useState([1, 2, 3, 4]);
  return (
    <div className="Companies">
      {d &&
        d.map((item, index) => {
          return <CompanyView key={index} />;
        })}
    </div>
  );
};
export default Companies;
