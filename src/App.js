import React, { useState, useEffect } from "react";
import "./index.css";
import JobAd from "./component/JobAd";
import Login from "./component/Login";
import SendingResume from "./component/SendingResume";
import Employee from "./component/RegistersForm/Employee";
import Author from "./component/RegistersForm/Author";
import Company from "./component/RegistersForm/Company";
import CreatePost from "./component/Panels/CreatePost";
import BasicInformation from "./component/Resume/BasicInformation";
import EducationalRecords from "./component/Resume/EducationalRecords";
import WorkExperience from "./component/Resume/WorkExperience";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Register from "./component/Register";
import Code from "./component/Code";
import UserPassword from "./component/UserPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Employer from "./component/RegistersForm/Employer";
import Axios from "./component/BaseUrl";
function App() {
  const [userType, setUserType] = useState("");
  const [xsrfToken, setToken] = useState("");
  const setType = (type) => {
    setUserType(type);
  };
  useEffect(() => {
    const token = localStorage.getItem("xsggrfToken");
    // if (token) {
    // Axios.get("/sanctum/csrf-cookie").then((res) => {
    //   console.log(res);
    // });

    // set in local
    // }
    Axios.get("/sanctum/csrf-cookie").then((res) => {
      console.log(res.access_token);
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setType={setType} />} />
        <Route path="/Login" element={<Login userType={userType} />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Code" element={<Code />} />
        <Route
          path="/UserPassword"
          element={<UserPassword userType={userType} />}
        />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Employer" element={<Employer />} />
        <Route path="/Company" element={<Company />} />
      </Routes>
    </Router>
  );
}

export default App;
