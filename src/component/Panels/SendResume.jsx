import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/Panels/SendResume.css";
const SendResume = () => {
  const [data, setData] = useState({
    name: "کاربر",
    tel: "09123335847",
    status: "تعیین وضعیت شده",
    JobAdTilte: "استخدام برنامه نویس فرانت اند",
  });
  return (
    <div className="SendResume">
      <div className="Col1">
              <img src="#" alt="userImg" />
      </div>
<div className="Col2">
        <span>{data.name}</span>
      <span>{data.tel}</span>
      <span>{data.status}</span>

      <div className="ButtonContainer">
      <Link>{data.JobAdTilte}</Link>  
      <Link>مشاهده رزومه</Link>
      </div>

</div>

    </div>
  );
};
export default SendResume;
