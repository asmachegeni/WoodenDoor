import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";
import JobAds from "./JobAds";
import "./../style/homePage.css"
const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <JobAds />
      <Services />
      <Footer />
    </div>
  );
};
export default HomePage;
