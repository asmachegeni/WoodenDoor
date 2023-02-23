import "../../style/Blog/HomePage.css";
import SlideBox from "./SlideBox";
import SearchBox from "./SearchBox";
import Posts from "./Posts";
import TopCategories from "./TopCategories";
import ResumeLink from "./ResumeLink";
import Header from "../Header";
import Footer from "../Footer";

const HomePage = (props) => {
  console.log(props.data)
  return (
    <div className="HomePage">
      <Header />
      <div className="SlideBoxContainer">
      <SlideBox />
      </div>
      <SearchBox />
      <Posts />
      <TopCategories />
      <ResumeLink />
      <Footer />
    </div>
  );
};
export default HomePage;
