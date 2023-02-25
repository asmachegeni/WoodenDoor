import React, { useState } from "react";
import { Link } from "react-router-dom";
const SendResume = () => {
  const [data, setData] = useState({
    name: "کاربر",
    tel: "09123335847",
    status: "تعیین وضعیت شده",
    JobAdTilte: "استخدام برنامه نویس فرانت اند",
  });
  return (
    <div>
      <img src="#" alt="userImg" />
      <span>{data.name}</span>
      <span>{data.tel}</span>
      <span>{data.status}</span>
      <Link>{data.JobAdTilte}</Link>
      <Link>مشاهده رزومه</Link>
    </div>
  );
};
export default SendResume;
