import React from "react";
import Slider from "react-slick";
import logo1 from "../../images/-e-cooperativelogo-01.png"
import logo2 from "../../images/-e-cooperativelogo-02.png"
import logo3 from "../../images/-e-cooperativelogo-03.png"
import logo4 from "../../images/-e-cooperativelogo-04.png"
import logo5 from "../../images/-e-cooperativelogo-05.png"
import logo6 from "../../images/-e-cooperativelogo-06.png"
export default function Partners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <>
      <div className="partners">
        <div className="container">
          <div className="partners__content">
            <h1>많은 우수 기업과 함께 하고 있습니다.</h1>
            <p>가드 시그니처를 믿고 신뢰하는 고객사들이 있습니다.</p>
          </div>
          <div className="partners__logo">
            <Slider {...settings}>
                <div className="logo-image">
                    <img src={logo1} alt="" />
                </div>
                <div className="logo-image">
                <img src={logo2} alt="" />
                </div>
                <div className="logo-image">
                <img src={logo3} alt="" />
                </div>
                <div className="logo-image">
                <img src={logo4} alt="" />
                </div>
                <div className="logo-image">
                <img src={logo5} alt="" />
                </div>
                <div className="logo-image">
                <img src={logo6} alt="" />
                </div>
                <div className="logo-image">
                    <img src={logo3} alt="" />
                </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
