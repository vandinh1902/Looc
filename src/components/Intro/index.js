import React from "react";
import icon1 from "../../images/-e-reason_icon_1.png";
import icon2 from "../../images/-e-reason_icon_2.png";
import icon3 from "../../images/-e-reason_icon_3.png";
import icon4 from "../../images/-e-reason_icon_4.png";
import icon5 from "../../images/-e-reason_icon_5.png";
import icon6 from "../../images/-e-reason_icon_6.png";
import img1 from "../../images/-e-reason_img_1.png";
export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="intro__heading">
            <h1>가드 시그니처를 선택하는 이유</h1>
            <p>
              많은 기업들이 가드 시그니처를 선택하는 이유,
              <br /> 아래 버튼을 눌러 상세한 정보를 알아보세요.
            </p>
          </div>
          <div className="intro__content">
            <div className="intro__list">
              <div className="intro__item item1">
                <img src={icon1} alt="" />
                <h3>쉽고 편리하게</h3>
                <p>
                  번거로운 절차 없이 누구나
                  <br /> 빠르게 계약을 체결할 수 있습니다.
                </p>
              </div>
              <div className="intro__item item2">
                <img src={icon2} alt="" />
                <h3>쉽고 편리하게</h3>
                <p>
                  번거로운 절차 없이 누구나
                  <br /> 빠르게 계약을 체결할 수 있습니다.
                </p>
              </div>
              <div className="intro__item item3">
                <img src={icon3} alt="" />
                <h3>쉽고 편리하게</h3>
                <p>
                  번거로운 절차 없이 누구나
                  <br /> 빠르게 계약을 체결할 수 있습니다.
                </p>
              </div>
              <div className="intro__item item4">
                <img src={icon4} alt="" />
                <h3>쉽고 편리하게</h3>
                <p>
                  번거로운 절차 없이 누구나
                  <br /> 빠르게 계약을 체결할 수 있습니다.
                </p>
              </div>
              <div className="intro__item item5">
                <img src={icon5} alt="" />
                <h3>쉽고 편리하게</h3>
                <p>
                  번거로운 절차 없이 누구나
                  <br /> 빠르게 계약을 체결할 수 있습니다.
                </p>
              </div>
              <div className="intro__item item6">
                <img src={icon6} alt="" />
                <h3>쉽고 편리하게</h3>
                <p>
                  번거로운 절차 없이 누구나
                  <br /> 빠르게 계약을 체결할 수 있습니다.
                </p>
              </div>
              <div className="intro__item item7">
                <img src={img1} alt=""  />
              </div>
            </div>
            <div className="btn-text">
                  <a className="text-heading" href="">가이드 다운로드 <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
