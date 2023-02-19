import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
const EducationalCard = ({ info, showForm }) => {
  return (
    <div className="Card">
      <div className="CradIcon">
        <FiEdit2
          className="EditIcon"
          onClick={() => {
            showForm(info);
          }}
        />
        <FiTrash2 className="Delete" />
      </div>
      <div className="CardDetail">
        <span className="CardField">{info.Field}</span>
        <span className="CardUni">{info.Uni}</span>
        <span className="CardDate">{info.Date}</span>
        <span className="CardAvg">{info.Avg}</span>
      </div>
    </div>
  );
};
export default EducationalCard;
