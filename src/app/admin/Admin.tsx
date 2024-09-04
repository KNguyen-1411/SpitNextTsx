"use client";
import React from "react";
import { usePathname } from "next/navigation";
export function PathAdmin() {
  const pathname = usePathname();
  return pathname;
}
export default function Admin() {
  return (
    <>
      <div className="bg-full">
        <h1 className="text-center my-5">Admin Page</h1>
      </div>
    </>
  );
}
