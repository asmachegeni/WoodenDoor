import "../../style/Blog/SlideBox.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/img/ArticleCoverExample.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const SlideBox = (props) => {
  const [Slides, SetSlides] = useState(props);

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
        {Slides.data.map((item, index) => {
          return (
            <div className="Slide" key={index}>
              <div className="Col-1">
                <img src={item.coveruri} />
              </div>
              <div className="Col-2">
                <a href={item.uri} className="Title">
                  {item.title}
                </a>
                <span className="Content">{item.description}</span>
                <div className="BtnContainer">
                  <a href={item.uri} className="ReadMoreBtn">
                    ادامه مطلب
                  </a>
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
