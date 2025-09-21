"use client";
import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "./ScrollReveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.JPG";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";

const Events = () => {
  // 🎯 Event date
  const eventDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 🚀 Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section id="events" className="py-24 bg-black relative">
      <RevealOnScroll>
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-center drop-shadow-lg">
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Featured Event
            </span>
          </h2>

          {/* Wrapper with Gradient Frame */}
          <div className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-[2px] rounded-2xl shadow-[0_0_60px_rgba(168,85,247,0.5)]">
            <div className="bg-gray-900 rounded-2xl overflow-hidden md:flex items-center">
              {/* Carousel */}
              <div className="md:w-1/2 relative">
                <Slider {...sliderSettings}>
                  {[img1, img2, img3, img4, img5].map((src, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-2xl">
                      <img
                        src={src}
                        alt={`Event ${idx + 1}`}
                        className="w-full h-[250px] md:h-[500px] object-cover transform scale-105 transition-transform duration-[4000ms] ease-out"
                      />

                      {/* Golden Glow Overlay */}
                      <div className="absolute inset-0 bg-yellow-200/10 mix-blend-overlay pointer-events-none"></div>

                      {/* ✨ Fade Edges */}
                      <div className="absolute inset-0 rounded-2xl pointer-events-none">
                        {/* Top */}
                        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/50 via-black/20 to-transparent"></div>
                        {/* Bottom */}
                        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                        {/* Left */}
                        <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>
                        {/* Right */}
                        <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-black/40 via-black/10 to-transparent"></div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-4xl font-bold text-white mb-4 leading-snug">
                  Design Aesthetics Idea Challenge
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Showcase your creativity in design aesthetics for robotics in
                  this exciting challenge organized by the Departments of CS with
                  Cognitive Systems & AI/ML.
                </p>

                {/* Countdown Timer */}
                <div className="grid grid-cols-4 gap-4 text-center mb-8">
                  {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
                    const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
                    return (
                      <div
                        key={label}
                        className="p-4 rounded-lg bg-black/50 backdrop-blur-md border border-purple-500/20 shadow-inner flex flex-col items-center"
                      >
                        <div className="text-xs md:text-3xl font-extrabold text-white drop-shadow-lg">{values[i]}</div>
                        <div className="text-[10px] md:text-xs uppercase text-gray-400">{label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Button */}
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(236,72,153,0.7)]"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Events;


