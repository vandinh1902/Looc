import React from "react";

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
                <a href="">고객센터</a>
              </li>
              <li className="nav__item">
                <a href="">고객센터</a>
              </li >
              <li className="nav__item">
                <a href="">고객센터</a>
              </li>
              <li className="nav__item">
                <a href="">고객센터</a>
              </li>
              <li className="nav__item">
                <a href="">고객센터</a>
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
                <a href="">로그인</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
