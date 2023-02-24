import React, { useState } from "react";
import Select from "react-select";
import "../../style/Resume/WorkExperience.css";
const WorkExperience = () => {
  const grades = [
    { value: "کارگر", label: "کارگر" },
    {
      value: "کارمند",
      label: "کارمند",
    },
    { value: "کارشناس", label: "کارشناس" },
    { value: "کارشناس ارشد", label: "کارشناس ارشد" },
    { value: "مدیر میانی", label: "مدیر میانی" },
    { value: "معاونت", label: "معاونت" },
    { value: "مدیر ارشد", label: "مدیر ارشد" },
  ];
  const [years, setYears] = useState([
    1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341,
    1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353,
    1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365,
    1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377,
    1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389,
    1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401,
  ]);
  const [months, setmonth] = useState([
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ]);
  const [isCurrent, setIsCurrent] = useState(true);
  const [titleJob, setTilteJob] = useState("");
  const [organName, setOrganNmae] = useState("");
  const [context, setContex] = useState("");
  const [country, setCountry] = useState("");
  const [startYear, setStartYear] = useState("1330");
  const [startMonth, setStartMonth] = useState("فروردین");
  const [endYear, setEndYear] = useState("1330");
  const [endMonth, setEndMonth] = useState("فروردین");
  const [text, setText] = useState("");
  const [isResume, setIsResume] = useState(false);
  return (
    <div className="WorkExperience">
      <div className="CheckBoxContainer">
        <input
          type={"checkbox"}
          onChange={() => {
            setIsResume(!isResume);
          }}
        />
        <span>سابقه شغلی دارم</span>
      </div>

      {isResume && (
        <div className="FormContainer">
          <span>آخرین عناون شغلی شما</span>
          <input
            type={"text"}
            onChange={(e) => setTilteJob(e.target.value)}
            value={titleJob}
          />
          <span>نام سازمان</span>
          <input
            type={"text"}
            value={organName}
            onChange={(e) => {
              setOrganNmae(e.target.value);
            }}
          />
          <span>رده سازمانی</span>
          <Select
            options={grades}
            placeholder="جستجو کنید"
            // value={selectedOptions}
            // onChange={handleSelect}
            isSearchable={true}
          />
          <span>زمینه فعالیت شما در این شرکت</span>
          <input
            type={"text"}
            value={context}
            onChange={(e) => {
              setContex(e.target.value);
            }}
          />
          <span>کشور</span>
          <input
            type="text"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            value={country}
          />
          <div className="StartDate">
            <span>سال شروع</span>
            <select
              value={startYear}
              onChange={(e) => {
                setStartYear(e.target.value);
              }}
            >
              {years.map((year, index) => (
                <option value={year} key={index}>
                  {year}
                </option>
              ))}
            </select>
            <span>ماه شروع</span>
            <select
              value={startMonth}
              onChange={(e) => {
                setStartMonth(e.target.value);
              }}
            >
              {months.map((month, index) => (
                <option value={month} key={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {isCurrent && (
            <div className="EndDate">
              <span>سال پایان</span>
              <select
                value={endYear}
                onChange={(e) => {
                  setEndYear(e.target.value);
                }}
              >
                {years.map((year, index) => (
                  <option value={year} key={index}>
                    {year}
                  </option>
                ))}
              </select>
              <span>ماه پایان</span>
              <select
                value={endMonth}
                onChange={(e) => {
                  setEndMonth(e.target.value);
                }}
              >
                {months.map((month, index) => (
                  <option value={month} key={index}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="CheckBoxContainer">
            <input
              type={"checkbox"}
              onChange={() => {
                setIsCurrent(!isCurrent);
              }}
            />
            <span>هنوز در این شرکت مشغول به کار هستم</span>
          </div>

          <span>دستاوردها و وظایف کلیدی</span>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
      )}
    </div>
  );
};
export default WorkExperience;
