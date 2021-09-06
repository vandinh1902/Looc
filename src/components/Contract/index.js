import React from "react";
import icon1 from "../../images/icon_1.png";
import icon2 from "../../images/icon_2.png";
import icon3 from "../../images/icon_3.png";
import icon4 from "../../images/icon_4.png";
export default function Contract() {
  return (
    <>
      <div className="contract">
        <div className="container">
          <div className="contract__quick">
            <div className="contract__quick-content">
              <div className="heading-left">
                <h1>Easy and quick</h1>
              </div>
              <div className="heading-right">
                <p className="heading-text item1">
                  가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을
                  진행할 수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고,
                  <br />
                  서명을 요청하세요. 상대방도 별도의 회원가입이나 복잡한 인증
                  과정없이 서명이 가능합니다.
                  <br />
                  계약이 진행되는 모든 과정을 효과적으로 체크할 수 있고, 언제
                  어디서든 5분이면 계약이 완료됩니다.
                  <br />
                  <br />
                  가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을
                  체결하고 관리하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contract__heading">
          <h1>5분 만에 끝내는 계약 업무</h1>
          <p>
            계약서 파일을 업로드하여 서명을 요청해 보세요.
            <br />
            상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수
            있습니다.
            <br />
            언제 어디서든 5분만에 계약을 체결해 보세요
          </p>
        </div>
        <div className="contract__list">
          <div className="contract__item">
            <img src={icon1} alt="" />
            <div className="item__heading">
              <h3>업로드하기</h3>
              <p>
                필요한 계약서 파일을 <br />
                업로드합니다.
              </p>
              <br />
            </div>
          </div>
          <div className="contract__item">
            <img src={icon2} alt="" />
            <div className="item__heading">
              <h3>서명 요청하기</h3>
              <p>
                업로드한 계약서 파일에 <br /> 서명 요청을 하세요.
              </p>
            </div>
          </div>
          <div className="contract__item">
            <img src={icon3} alt="" />
            <div className="item__heading">
              <h3>서명 입력하기</h3>
              <p>
                상대방이 간단한 절차를 통해 <br /> 서명할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="contract__item">
            <img src={icon4} alt="" />
            <div className="item__heading">
              <h3>계약 완료</h3>
              <p>
                {" "}
                언제 어디서든 <br /> 5분 만에 계약 완료!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
