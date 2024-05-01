import React, { useState } from "react";
import Profile from "../assets/profile.png";

export default function SecondaryNavigation() {
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false);

  return (
    <div className="secondary-navigation">
      <div className="nav-element">
        <div className="searchBox">
          <button
            className="searchTab"
            aria-label="검색"
            data-uia="search-box-launcher"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM14.6177 16.0319C13.078 17.2635 11.125 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.125 17.2635 13.078 16.0319 14.6177L21.7071 20.2929L20.2929 21.7071L14.6177 16.0319Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="nav-element show-kids">
        <a href="">키즈</a>
      </div>
      <div className="nav-element">
        <span className="notifications">
          <button
            className="notifications-menu"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="알림"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0487 15.3307 21.0849 15.4245 22.107 15.5347L21.8926 17.5232C18.722 17.1813 15.409 17 11.9998 17C8.59057 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91474 15.4245 3.95095 15.3307 4.99979 15.2538V11C4.99979 7.47345 7.6076 4.55599 11 4.07086V2H13V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99979 8.23858 6.99979 11V15.1287C8.64042 15.0437 10.3089 15 11.9998 15C13.6908 15 15.3592 15.0437 16.9998 15.1287ZM8.62569 19.3712C8.66211 20.5173 10.151 22 11.9994 22C13.8478 22 15.3366 20.5173 15.373 19.3712C15.3801 19.1489 15.1756 19 14.9531 19H9.04556C8.82309 19 8.61862 19.1489 8.62569 19.3712Z"
                fill="white"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="nav-element">
        <div className="account-menu-item">
          <div
            className="account-dropdown-button"
            onMouseEnter={() => setSecondaryNavOpen(true)}
            onMouseLeave={() => setSecondaryNavOpen(false)}
          >
            <a
              href=""
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="&amp;#xC9C0;&amp;#xCC2C;&nbsp;- 계정 &amp; 설정"
            >
              <span className="profile-link" role="presentation">
                <img className="profile-icon" src={Profile} alt="profile" />
              </span>
            </a>
            <span
              className={`caret ${secondaryNavOpen ? "open" : ""}`}
              role="presentation"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
