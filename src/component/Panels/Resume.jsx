import React, { useState } from "react";
import "../../style/Panels/Resume.css"
const Resume = () => {
  const [data, setData] = useState({
    title: "استخدام توسعه‌دهنده Front-end",
    city: "تهران",
    minsalary: "6,000,000",
    maxSalary: "9,000,000",
    tech: ["react", "html", "js", "next"],
    status: "پذیرفته شده",
  });
  return (
    <div className="Resume">
      <div className="Col1">
        <img src="#" alt="logo" />
      </div>
      <div className="Col2">
              <span className="Title">{data.title}</span>
      <span>{data.city}</span>
      <span>{`حقوق ${data.minsalary} تا ${data.maxSalary}`}</span>
      {data.tech &&
        data.tech.map((item) => {
          <span>{item}</span>;
        })}
        <div className="StatusContainer">
          <span>{data.status}</span>
        </div>
      
      </div>

    </div>
  );
};
export default Resume;
