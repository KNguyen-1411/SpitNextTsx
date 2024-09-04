"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const router = useRouter();
  useEffect(() => {
    scroll.scrollToTop({
      duration: 2500,
      smooth: "easeInOutQuint",
    });
  }, [router]);

  return null;
};

export default ScrollToTop;
