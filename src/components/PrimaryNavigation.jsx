import React from "react";

export default function PrimaryNavigation() {
  return (
    <ul className="tabbed-primary-navigation">
      <li className="navigation-menu">
        <a className="menu-trigger">메뉴</a>
      </li>
      <li className="navigation-tab">
        <a className="current active">홈</a>
      </li>
      <li className="navigation-tab">
        <a>시리즈</a>
      </li>
      <li className="navigation-tab">
        <a>영화</a>
      </li>
      <li className="navigation-tab">
        <a>NEW! 요즘 대세 콘텐츠</a>
      </li>
      <li className="navigation-tab">
        <a>내가 찜한 리스트</a>
      </li>
      <li className="navigation-tab">
        <a>언어별로 찾아보기</a>
      </li>
    </ul>
  );
}
