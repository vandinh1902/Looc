import React from "react";
import Burger from "./burger";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__left" >
            <h1 >Guard Signature</h1>
          </div>
          <div className="header__nav">
            <ul className="nav__bar">
              <li className="nav__item active">
                <a href="">서비스 소개</a>
              </li>
              <li className="nav__item">
                <a href="">법적효력·보안</a>
              </li >
              <li className="nav__item">
                <a href="">활용 분야</a>
              </li>
              <li className="nav__item">
                <a href="">이용 혜택</a>
              </li>
              <li className="nav__item">
                <a href="">요금 안내</a>
              </li>
              <li className="nav__item">
                <a href="">고객센터</a>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <ul className="nav__right">
              <li>
                <a href="">로그인</a>
              </li>
              <li>
                <a href="">회원가입</a>
              </li>
            </ul>
          </div>
          <div className="header__buger">
            <Burger/>
          </div>
        </div>
      </div>
    </>
  );
}
