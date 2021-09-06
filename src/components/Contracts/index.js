import React from "react";
import TractsIcon1 from "../../images/-e-contract_icon_1.png";
import TractsIcon2 from "../../images/-e-contract_icon_2.png";
import TractsIcon3 from "../../images/-e-contract_icon_3.png";
import TractsIcon4 from "../../images/-e-contract_icon_4.png";
import TractsIcon5 from "../../images/-e-contract_icon_5.png";
import TractsIcon6 from "../../images/-e-contract_icon_6.png";
export default function Contracts() {
  return (
    <>
      <div className="contracts">
        <div className="container">
          <div className="contracts__heading">
            <h2>다양한 계약서에 필수적 사용</h2>
            <p>
              근로 계약서, 각종 동의서, 입점 계약서, 가맹 계약서,
              <br />
              용역 계약서, 공급 계약서 이외에도
              <br />
              사용 가능한 계약서를 가드 시그니처와 함께 확인해보세
            </p>
          </div>
          <div className="contracts__list">
            <div className="contracts__item">
              <img src={TractsIcon1} alt="" />
              <div className="item-heading">
                <h3>근로 계약서</h3>
                <p>
                  근로자가 취업 후 필요로 하는 <br />
                  근로 계약서, 연봉 계약서 등
                </p>
              </div>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <div className="contracts__item">
              <img className="contracts-icon" src={TractsIcon2} alt="" />
              <div className="item-heading">
                <h3>각종 동의서</h3>
                <p>
                  용도에 따라 필요한 <br /> 동의서, 확인서, 신청서 등
                </p>
              </div>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <div className="contracts__item">
              <img className="contracts-icon" src={TractsIcon3} alt="" />
              <div className="item-heading">
                <h3>입점 계약서</h3>
                <p>
                  입점 등을 위한 계약 내용을 적은 <br /> 쇼핑몰, 사무실 입점
                  계약서 등
                </p>
              </div>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <div className="contracts__item">
              <img className="contracts-icon" src={TractsIcon4} alt="" />
              <div className="item-heading">
                <h3>가맹 계약서</h3>
                <p>
                  가맹과 관련된 계약 체결을 위한 <br /> 가맹 [프랜차이즈],
                  대리점 계약서 등
                </p>
              </div>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <div className="contracts__item">
              <img className="contracts-icon" src={TractsIcon5} alt="" />
              <div className="item-heading">
                <h3>용역 계약서</h3>
                <p>
                  용역 계약과 관련된 <br /> 용역, 외주, 위탁, 아웃소싱 계약서 등
                </p>
              </div>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <div className="contracts__item">
              <img className="contracts-icon" src={TractsIcon6} alt="" />
              <div className="item-heading">
                <h3>공급 계약서</h3>
                <p>
                  회사의 물품과 관련된 모든 <br /> 공급, 주문, 발주, 납품 계약서
                  등
                </p>
              </div>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
          <div className="contracts__btn">
            <h2>그 외 사용가능한 계약서가 궁금하신가요?</h2>
            <div className="btn-text">
              <a className="text-heading" href="">
                더 살펴보기{" "}
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
