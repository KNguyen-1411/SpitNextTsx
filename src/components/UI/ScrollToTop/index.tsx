"use client";

import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import style from "./gototop.module.css";
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 1000,
    });
  };

  return (
    <button
      title="Go to top"
      className={`${style.gototop} ${isVisible ? style.acti : ""}`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-chevron-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
