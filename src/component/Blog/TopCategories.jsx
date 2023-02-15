import "../../style/Blog/TopCategories.css";
import ExampleImage from "../../assets/img/TopCategorieExample.jpg";
const TopCategories = () => {
  return (
    <div className="TopCategories">
      <div className="CategorieBox">
        <a href="#">
          <img src={ExampleImage} />
          <span>رزومه</span>
        </a>
      </div>
      <div className="CategorieBox">
        <a href="#">
          <img src={ExampleImage} />
          <span>مصاحبه شغلی</span>
        </a>
      </div>
      <div className="CategorieBox">
        <a href="#">
          <img src={ExampleImage} />
          <span>حقوق و دستمزد</span>
        </a>
      </div>
    </div>
  );
};

export default TopCategories;
