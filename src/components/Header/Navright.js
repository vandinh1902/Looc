import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 0px;
  div{
      display: none;
  }
  li {
    text-align: center;
    
    
    
    
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #fff;
    transform: ${({ open }) => (open ? "translateX(0) " : "translateX(100%)")};
    width: 300px;
    transition: transform 0.3s ease-in-out;
    padding-top: 4rem;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    box-shadow: 0 0 1px #0000004d;
    overflow: hidden;
    div{
        display:block;
    }
    li{
        padding: 18px 10px;
        border-bottom: 1px solid;
        text-align: left;
    }
  }
`;

export default function NavRight({ open }) {
  return (
    <>
        
      <Ul open={open}>
      
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">서비스 소개</a>
        </li>
        <li className="nav-mobile-menu">
          
          <a className="nav-mobile-text">법적효력·보안</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">활용 분야</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text" href="#news">이용 혜택</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">요금 안내</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">고객센터</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">로그인</a>
        </li>
        <li className="nav-mobile-menu">
          <a className="nav-mobile-text">회원가입</a>
        </li>
      </Ul>
    </>
  );
}
