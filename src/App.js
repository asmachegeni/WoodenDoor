import React from "react";
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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
