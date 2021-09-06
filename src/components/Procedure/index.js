import React from "react";
import Slider from "react-slick";
import img1 from "../../images/Group-99.png"
import img2 from "../../images/-e-view_01.png"
import img3 from "../../images/-e-view_03.png"

export default function Procedure() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
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
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <div className="procedure">
        <div className="container">
          <div className="procedure__content">
            <h3>
              짧고 간단한 절차 <br /> 지금 직접 확인해보세요
            </h3>
            <div className="procedure__carousel">
            <Slider {...settings}> 
            <div className="procedure__img">
                <img src={img2} alt="" width="300px" />
            </div>
            <div className="procedure__img">
                <img src={img1} alt="" />
            </div>
            <div className="procedure__img">
                <img src={img3} alt="" width="300px"  />
            </div>
            <div className="procedure__img">
                <img src={img1} alt=""  />
            </div>
            <div>
                
            </div>
            </Slider>
            </div>
            <div className="btn-text">
              <a className="text-heading" href="">
              전자계약 체험하기
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
