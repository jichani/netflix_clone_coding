import React, { useState } from "react";
import Profile from "../assets/profile.png";

export default function SecondaryNavigation() {
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false);
  const [searchBtnClick, setSearchBtnClick] = useState(false);

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
            <input
              className="searchInput"
              type="text"
              placeholder="제목, 사람, 장르"
            />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_94_2)">
                <path
                  d="M0.384228 0.384228C0.630351 0.138411 0.963982 0.000337998 1.31184 0.000337998C1.65969 0.000337998 1.99332 0.138411 2.23944 0.384228L7 5.14303L11.7606 0.384228C11.8824 0.262413 12.027 0.165783 12.1861 0.0998575C12.3453 0.0339315 12.5159 3.39591e-09 12.6882 0C12.8604 -3.39591e-09 13.031 0.0339315 13.1902 0.0998575C13.3493 0.165783 13.494 0.262413 13.6158 0.384228C13.7376 0.506043 13.8342 0.650659 13.9001 0.809818C13.9661 0.968977 14 1.13956 14 1.31184C14 1.48411 13.9661 1.65469 13.9001 1.81385C13.8342 1.97301 13.7376 2.11763 13.6158 2.23944L8.85697 7L13.6158 11.7606C13.8618 12.0066 14 12.3402 14 12.6882C14 13.0361 13.8618 13.3698 13.6158 13.6158C13.3698 13.8618 13.0361 14 12.6882 14C12.3402 14 12.0066 13.8618 11.7606 13.6158L7 8.85697L2.23944 13.6158C1.99343 13.8618 1.65976 14 1.31184 14C0.963916 14 0.630245 13.8618 0.384228 13.6158C0.138211 13.3698 0 13.0361 0 12.6882C0 12.3402 0.138211 12.0066 0.384228 11.7606L5.14303 7L0.384228 2.23944C0.138411 1.99332 0.000337998 1.65969 0.000337998 1.31184C0.000337998 0.963982 0.138411 0.630351 0.384228 0.384228Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_94_2">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
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
