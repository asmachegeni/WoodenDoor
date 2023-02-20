import React, { useState } from "react";
const Resumes = () => {
  const [resumes, setResumes] = useState([]);
  const [filter1, setFilter1] = useState(false);
  const [filter2, setFilter2] = useState(false);
  const [filter3, setFilter3] = useState(false);
  const [filter4, setFilter4] = useState(false);

  return (
    <div>
      {/* map on resume */}
      {/* {filter1&&
    } */}
      <div>
        <span>رد شده</span>
        <input
          type={"checkbox"}
          onChange={() => {
            setFilter1(!filter1);
          }}
        />
        <span>تایید شده</span>
        <input
          type={"checkbox"}
          onChange={() => {
            setFilter2(!filter2);
          }}
        />
        <span>تعیین وضعیت نشده</span>
        <input
          type={"checkbox"}
          onChange={() => {
            setFilter3(!filter3);
          }}
        />
        <span> دیده شده</span>
        <input
          type={"checkbox"}
          onChange={() => {
            setFilter4(!filter4);
          }}
        />
      </div>
    </div>
  );
};
export default Resumes;
