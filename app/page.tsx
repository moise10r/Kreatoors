"use client";

import React, { useState } from "react";
import { LuCornerUpLeft } from "react-icons/lu";
import About from "@/components/about";
import Content from "@/components/content";
import Preferences from "@/components/Preferences";
import Preferred from "@/components/Preferred";
import Goals from "@/components/Goals";
import CarouselNavigation from "@/components/carousel";

function SlideOne({ nextSlide }) {
  return (
    <div className="flex items-center justify-between h-[60vh]">
      <div>
        <h1 className="font-semibold mb-4 text-[24px]">
          Welcome to Kreatoors!
        </h1>
        <p className="mb-10 text-xs">
          Unleash your potential with tools designed for advocacy, influence,
          and engagement.
        </p>
        <button
          onClick={nextSlide}
          className="px-20 py-[12px] inline-block text-md text-[#fff] font-semibold button_bg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function SlideComplete() {
  return (
    <div className="flex items-center justify-between h-[60vh]">
      <div>
        <h1 className="font-semibold mb-2 text-[24px]">Setup Complete!</h1>
        <p className="mb-10 text-[16px]">
          Your experience is now tailored to your goals and role. Let’s start
          building together!
        </p>
        <button className="px-20 py-[12px] inline-block text-md text-[#fff] font-semibold button_bg">
          Explore Features
        </button>
      </div>
    </div>
  );
}

export default function SliderForm() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev: number) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev: number) => prev - 1);
    }
  };

  const slides = [
    <SlideOne nextSlide={nextSlide} />,
    <About />,
    <Preferences />,
    <Content />,
    <Preferred />,
    <Goals />,
    <SlideComplete />,
  ];

  return (
    <div className="flex h-[100vh]">
      <div className="slider-container w-1/2 py-16 px-40">
        <div className="slides pt-16 min-h-[90%] max-h-[80vh]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentSlide
                  ? "active"
                  : index < currentSlide
                  ? "prev"
                  : "next"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>

        {currentSlide > 0 && currentSlide < slides.length - 1 && (
          <div className="navigation-buttons flex items-center gap-4 fixed bottom-10 w-1/4 z-auto h-[10%]">
            <button
              onClick={prevSlide}
              className="flex gap-6 justify-between items-center px-16 py-[12px] border-[2px] border-[#6a67af] text-[#6a67af]"
            >
              <LuCornerUpLeft /> Back
            </button>
            <button
              onClick={nextSlide}
              className="px-20 py-[12px] inline-block text-md text-[#fff] font-semibold button_bg"
            >
              Continue
            </button>
          </div>
        )}
      </div>

      <div className="w-1/2 pt-20 pb-4 pr-10 h-full">
        <div className="gradient_bg w-full h-full rounded-3xl">
          <CarouselNavigation />
        </div>
      </div>
    </div>
  );
}
