"use client";
import React from "react";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import QAComponent from "@/components/UI/QA";
export default function IndexPage() {
  return (
    <>
      <Home1 />
      <Home2 />
      <Home3 />
      <QAComponent />
    </>
  );
}
