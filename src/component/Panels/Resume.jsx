import React, { useState } from "react";
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
    <div>
      <img src="#" alt="logo" />
      <span>{data.title}</span>
      <span>{data.city}</span>
      <span>{`حقوق ${data.minsalary} تا ${data.maxSalary}`}</span>
      {data.tech &&
        data.tech.map((item) => {
          <span>{item}</span>;
        })}
      <span>{data.status}</span>
    </div>
  );
};
export default Resume;
