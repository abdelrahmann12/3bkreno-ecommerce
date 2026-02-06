"use client";
import "./TextMove.css"

import Marquee from "react-fast-marquee";

export default function TextMove() {
  return (
    <div className="bg-gray-200 py-3 text-sm font-medium mb-3">
      <Marquee speed={40} pauseOnHover>
        <span className="mx-6">خصم 50% علي ساعه </span>
        <span className="mx-6">علي كل فاتوره 500ج</span>
        <span className="mx-6">خصم 50% علي ساعه </span>
        <span className="mx-6">علي كل فاتوره 500ج</span>
        <span className="mx-6">خصم 50% علي ساعه </span>
        <span className="mx-6">علي كل فاتوره 500ج</span>
        <span className="mx-6">خصم 50% علي ساعه </span>
        <span className="mx-6">علي كل فاتوره 500ج</span>
        <span className="mx-6">خصم 50% علي ساعه </span>
        <span className="mx-6">علي كل فاتوره 500ج</span>
      </Marquee>
    </div>
  )
}
