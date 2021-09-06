import React from "react";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
export default function Card() {
  return (
    <>
      <div className="card">
        <div className="container">
          <div className="card__content">
            <h1>안전한 안심 제도</h1>
            <p>가드 시그니처는 [전자문서및전자거래기본법 제4조 제1항]과 <br/>
            
              [전자서명법 제3조 제3항]에 따라 확실한 법적효력을 갖는 전자계약
              서비스 입니다.
            </p>
            <div className="card__list">
                <div className="card__item">
                    <img src={card1} alt="" />
                    <div className="card__text">
                        <h3>법적 효력 <br/> 자세히 알아보기</h3>
                        <div className="text-bottom">
                            <p>more view</p>
                            <i class="fa fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                </div>
                <div className="card__item">
                    <img src={card2} alt="" />
                    <div className="card__text">
                        <h3>서비스 보안 <br/> 자세히 알아보기</h3>
                        <div className="text-bottom">
                            <p>more view</p>
                            <i class="fa fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                </div>
                <div className="card__item">
                    <img src={card3} alt="" />
                    <div className="card__text">
                        <h3>위변조 검증 <br/> 자세히 알아보기</h3>
                        <div className="text-bottom">
                            <p>more view</p>
                            <i class="fa fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
