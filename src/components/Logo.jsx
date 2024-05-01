import React from "react";
import NetflixLogo from "../assets/netflix.png";

export default function Logo() {
  return (
    <a href="">
      <img className="logo" src={NetflixLogo} width={94} alt="logo" />
    </a>
  );
}
