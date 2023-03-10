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
import CreateResume from "./component/Resume/CreateResume";
import EmployeePanel from "./component/Panels/EmployeePanel";
import CompeleteRegister from "./component/Panels/CompleteRegister";
import Resumes from "./component/Panels/Resumes";
import Search from "./component/Search";
import Blog from "./component/Blog/Blog";
import AuthorPanel from "./component/Panels/AuthorPanel";
import AuthorPosts from "./component/Panels/AuthorPosts";
import EmployerPanel from "./component/Panels/EmployerPanel";
import JobAdCompany from "./component/Panels/JobAdCompany";
import CreateJobAd from "./component/Panels/CreateJobAd";
import ResumesEmployer from "./component/Panels/ResumesEmployer";
import Companies from "./component/Panels/Companies";
import Software from "./component/Resume/Software";
import AdditionalSkills from "./component/Resume/AdditionalSkills";
import Pdf from "./component/Resume/Pdf";
function App() {
  const [userType, setUserType] = useState("");
  const setType = (type) => {
    setUserType(type);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage setType={setType} userType={userType} />}
        />
        <Route
          path="/Blog"
          element={<Blog setType={setType} userType={"نویسنده"} />}
        />
        <Route path="/AuthorPanel" element={<AuthorPanel />}>
          <Route path="CreatePost" element={<CreatePost />} />
          <Route path="AuthorPosts" element={<AuthorPosts />} />
        </Route>

        <Route path="/Login" element={<Login userType={userType} />} />
        <Route path="/Register" element={<Register userType={userType} />} />
        <Route path="/Code" element={<Code />} />
        <Route
          path="/UserPassword"
          element={<UserPassword userType={userType} />}
        />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Employer" element={<Employer />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/CreateResume" element={<CreateResume />}>
          <Route path="BasicInformation" element={<BasicInformation />} />
          <Route path="EducationalRecords" element={<EducationalRecords />} />
          <Route path="WorkExperience" element={<WorkExperience />} />
          <Route path="AdditionalSkills" element={<AdditionalSkills />} />
        </Route>
        <Route path="/EmployerPanel" element={<EmployerPanel />}>
          <Route path="CompeleteRegister" element={<CompeleteRegister />} />
          <Route path="Company" element={<Company />} />
          <Route path="JobAdCompany" element={<JobAdCompany />} />
          <Route path="CreateJobAd" element={<CreateJobAd />} />
          <Route path="ResumesEmployer" element={<ResumesEmployer />} />
          <Route path="Companies" element={<Companies />} />
        </Route>
        <Route path="/EmployeePanel" element={<EmployeePanel />}>
          <Route path="CompeleteRegister" element={<CompeleteRegister />} />
          <Route path="Resumes" element={<Resumes />} />
          <Route path="CreatePost" element={<CreatePost />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
