import React from "react";
import logoImg from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="w-full bg-[#0d0d0d] h-48 flex items-center justify-center">
      <img src={logoImg} />
    </div>
  );
}
