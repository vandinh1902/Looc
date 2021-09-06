import React from "react";
import icon1 from "../../images/-e-sns_icon_1.png";
import icon2 from "../../images/-e-sns_icon_2.png";
import icon3 from "../../images/-e-sns_icon_3.png";
export default function footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__heading">
              <ul className="footer__heading--nav">
                <li>
                  <a href="">이용약관</a>
                </li>
                <li>
                  <a href="">개인정보처리방침</a>
                </li>
                <li>
                  <a href="">고객센터</a>
                </li>
              </ul>
              <div className="footer__icon">
              <img src={icon1} alt="ns" />
              <img src={icon2} alt="facebook" />
              <img src={icon3} alt="blog" />
            </div>
            </div>
            <div className="footer__heading--text">
             <p>
              (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 <br />
              이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000
                <br />
                서울특별시 강남구 도산대로 8길 17 2층 
              </p>
              <p>Copyright© GUARDSIGNATURE All rights reserved.</p>
             </div>
            
          </div>
        </div>
      </div>
    </>
  );
}


