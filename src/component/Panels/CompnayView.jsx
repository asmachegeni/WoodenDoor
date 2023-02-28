import React, { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../style/Panels/CompanyView.css";
const CompanyView = () => {
  const [data, setData] = useState({
    name: "کار پردازان غرب ",
    nickName: " ودن در",
  });
  return (
    <div className="CompanyView">
      <div className="Col1">
        <img src="#" alt="logo" />
      </div>
      <div className="Col2">
        <span className="Title">{data.name}</span>
        <span>{data.nickName}</span>
        <div className="ButtonContainer">
          <FiEdit2 className="EditIcon" />
          <FiTrash2 className="DeleteIcon" />
        </div>
      </div>
    </div>
  );
};
export default CompanyView;
