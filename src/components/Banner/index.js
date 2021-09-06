import React from "react";
import banner from "../../images/banner.png";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <img className="banner__image" src={banner} alt="" />

        <div className="banner__content">
          <h1 className="text">
            가드시그니처로 <br />
            온라인 계약 하세요.
          </h1>
          <p className="text-item">비즈니스 성공을 위한 첫 걸음을 가드<br/>
           시그니처와 함께 시작하세요. 모든 계약을 <br/>

          쉽고 간단하게 처리할 수 있고, 온</p>

          <div className="btn-banner">
            <a href="" className="text">
              지금 확인하기
            </a>
            <span>
              <i className="fa fa-chevron-right fa-text" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
