import React, { useState } from "react";
import SendResume from "./SendResume";
const ResumesEmployer = () => {
  const [d, setD] = useState([1, 2, 3, 4]);
  return (
    <div>
      <div>
        <span>همه</span>
        <input type={"checkbox"} />
        <span>تعیین وضعیت نشده</span>
        <input type={"checkbox"} />
        <span>تایید شده</span>
        <input type={"checkbox"} />
        <span>رد شده</span>
        <input type={"checkbox"} />
        <span>در حال بررسی</span>
        <input type={"checkbox"} />
      </div>
      {d &&
        d.map((item, index) => {
          return <SendResume key={index} />;
        })}
    </div>
  );
};
export default ResumesEmployer;
