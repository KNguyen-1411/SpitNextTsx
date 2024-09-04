"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./ThemeToggler.css";

interface ThemeTogglerProps {
  idBtn: string;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ idBtn }) => {
  const initialTheme = "light";
  const [icon, setIcon] = useState<boolean>(false);

  const setTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  };

  const toggleTheme = () => {
    setThemeOnInit();
    const activeTheme = localStorage.getItem("theme");
    if (activeTheme === "dark") {
      setTheme("light");
      setIcon(true);
    } else {
      setTheme("dark");
      setIcon(false);
    }
  };
  const setThemeOnInit = useCallback(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.setAttribute("data-theme", savedTheme);
      setIcon(savedTheme === "light");
    } else {
      setTheme(initialTheme);
      setIcon(false);
    }
  }, []);

  useEffect(() => {
    setThemeOnInit();
  });

  return (
    <div>
      <input
        checked={icon}
        type="checkbox"
        id={idBtn}
        onChange={toggleTheme}
        placeholder="none"
      />
      <label htmlFor={idBtn} className="toggle">
        <span className="toggle-button">
          <span className="crater crater-1"></span>
          <span className="crater crater-2"></span>
          <span className="crater crater-3"></span>
          <span className="crater crater-4"></span>
          <span className="crater crater-5"></span>
          <span className="crater crater-6"></span>
          <span className="crater crater-7"></span>
        </span>
        <span className="star star-1"></span>
        <span className="star star-2"></span>
        <span className="star star-3"></span>
        <span className="star star-4"></span>
        <span className="star star-5"></span>
        <span className="star star-6"></span>
        <span className="star star-7"></span>
        <span className="star star-8"></span>
      </label>
    </div>
  );
};

export default ThemeToggler;
