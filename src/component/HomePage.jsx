import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import JobAds from "./JobAds";
import "./../style/homePage.css";
const HomePage = ({ setType }) => {
  return (
    <div className="homePage">
      <Header setType={setType} />
      <JobAds />
      <Services />
      <Footer />
    </div>
  );
};
export default HomePage;
