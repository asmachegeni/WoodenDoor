import React, { useState } from "react";
import EducationalCard from "./EductaionalCard";
import { FiPlus } from "react-icons/fi";
const EducationalRecords = () => {
  const [years, setYears] = useState([
    1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341,
    1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353,
    1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365,
    1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377,
    1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389,
    1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401,
  ]);
  const [Field, setField] = useState("");
  const [avg, setAvg] = useState("");
  const [uni, setUni] = useState("");
  const [startYear, setStartYear] = useState("1330");
  const [endYear, setEndYear] = useState("1330");
  const [isCurrent, setIsCurrent] = useState(true);
  const [isResume, setResue] = useState(true);
  const [showForm, setShowform] = useState(false);
  return (
    <div>
      {isResume && (
        <EducationalCard
          info={{
            Field: "مهندسی کامپیوتر",
            Uni: "بوعلی سینا",
            Date: "از سال 99",
            Avg: "17.00",
          }}
          showForm={(values) => {
            setAvg(values.Avg);
            setEndYear(values.endYear);
            setField(values.Field);
            setUni(values.Uni);
            setShowform(true);
          }}
        />
      )}
      {showForm && (
        <div className={"form"}>
          <span>رشته تحصیلی</span>
          <input
            type={"text"}
            onChange={(e) => {
              setField(e.target.value);
            }}
            value={Field}
          />
          <span>معدل(اختیاری) </span>
          <input
            type={"number"}
            onChange={(e) => {
              setAvg(e.target.value);
            }}
            value={avg}
          />
          <span>دانشگاه</span>
          <input
            type={"text"}
            onChange={(e) => {
              setUni(e.target.value);
            }}
            value={uni}
          />
          <span>سال شروع</span>
          <select
            onChange={(e) => {
              setStartYear(e.target.value);
            }}
            value={startYear}
          >
            {years.map((year, index) => (
              <option value={year} key={index}>
                {year}
              </option>
            ))}
          </select>
          {isCurrent && <span>سال پایان</span>}
          {isCurrent && (
            <select
              onChange={(e) => {
                setEndYear(e.target.value);
              }}
              value={endYear}
            >
              {years.map((year, index) => (
                <option value={year} key={index * 10}>
                  {year}
                </option>
              ))}
            </select>
          )}
          <span>هنوز مشغولم</span>
          <input
            type={"checkbox"}
            onChange={() => {
              setIsCurrent(!isCurrent);
            }}
          />
          <button
            onClick={() => {
              setShowform(false);
            }}
          >
            ذخیره
          </button>
        </div>
      )}
      <div
        className="Addbtn"
        onClick={() => {
          setShowform(true);
        }}
      >
        <FiPlus className={"addIcon"} />
        <button>افزودن</button>
      </div>
    </div>
  );
};
export default EducationalRecords;
