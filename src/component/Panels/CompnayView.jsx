import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
const CompanyView = () => {
  const [data, setData] = useState({
    name: "کار پردازان غرب ",
    nickName: " ودن در",
  });
  return (
    <div>
      <img src="#" alt="logo" />
      <span>{data.name}</span>
      <span>{data.nickName}</span>
      <FiEdit2 className="EditIcon" />
      <FiTrash2 className="DeleteIcon" />
    </div>
  );
};
export default CompanyView;
