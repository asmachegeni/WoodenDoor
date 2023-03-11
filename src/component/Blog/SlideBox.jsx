import "../../style/Blog/SlideBox.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import image from "../../assets/img/ArticleCoverExample.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { PostsData } from "../../assets/ExampleData.js";

const SlideBox = (props) => {
  const [Slides, SetSlides] = useState([
    {
      coveruri: "https://picsum.photos/300",
      title: "ودن در",

      description: "این یک متن آزمایشی است",
    },
  ]);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronRight className="ArrowRight"></FaChevronRight>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronLeft className="ArrowLeft"></FaChevronLeft>
      </div>
    );
  }

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="SlideBox">
      <Slider {...settings}>
        {Slides.map((item, index) => {
          return (
            <div className="SlideBox-Slide" key={index}>
              <div className="SlideBox-Col1">
                <img src={item.coveruri} />
              </div>
              <div className="SlideBox-Col2">
                <Link to={item.uri} className="SlideBox-Title">
                  {item.title}
                </Link>
                <span className="SlideBox-Content">{item.description}</span>
                <div className="SlideBox-BtnContainer">
                  <Link to={item.uri} className="SlideBox-ReadMoreBtn">
                    ادامه مطلب
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default SlideBox;
