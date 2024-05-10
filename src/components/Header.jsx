import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import Logo from "./Logo";
import PrimaryNavigation from "./PrimaryNavigation";
import SecondaryNavigation from "./SecondaryNavigation";
import throttle from "lodash/throttle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      // 50px 이상 스크롤됐을 때를 조건으로 설정
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    }, 300); // 0.3초 쓰로틀링

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pinning-header">
      <div className="pinning-header-container">
        <div
          className={`main-header has-billboard menu-navigation ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <Logo />
          <PrimaryNavigation />
          <SecondaryNavigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
