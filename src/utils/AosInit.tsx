"use client";
import AOS from "aos";
import { useEffect } from "react";
export const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
};
