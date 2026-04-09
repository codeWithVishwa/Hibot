import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.JPG";
import img4 from "../assets/img/4.jpg";
import img5 from "../assets/img/5.jpg";

const images = [img1, img2, img3, img4, img5];

const Gallery = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        }
      }
    ]
  };

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-white drop-shadow-2xl">
            SIGHTS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">SCENES</span>
          </h2>
          <p className="mt-8 text-gray-400 font-light tracking-wide text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the vibrant energy and innovation of past Hibot events. Browse through our premium visual archive capturing the very best moments of design and cognitive computing.
          </p>
        </div>

        <div className="gallery-slider-wrapper px-4 md:px-0">
          <Slider {...settings}>
            {images.map((src, idx) => (
              <div key={idx} className="px-4 pb-12 outline-none">
                <div className="gallery-card relative overflow-hidden rounded-[2rem] border-[3px] border-white/10 bg-black shadow-2xl transition-all duration-500 hover:border-pink-500/50">
                  {/* Image Container */}
                  <div className="h-[300px] md:h-[450px] lg:h-[550px] w-full relative">
                    <img
                      src={src}
                      alt={`Gallery view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Glowing Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent"></div>
                    
                    {/* Bottom Data Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-70 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="inline-block px-3 py-1 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full mb-3">
                        Moment Archive
                      </div>
                      <h3 className="text-white text-2xl font-heading font-bold">Hibot Chapter 0{idx + 1}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Custom Slick Overrides to create "Coverflow" look */
        .gallery-slider-wrapper .slick-slide {
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease;
          transform: scale(0.85);
          opacity: 0.5;
          filter: grayscale(80%) brightness(50%);
        }
        
        .gallery-slider-wrapper .slick-center {
          transform: scale(1.05);
          opacity: 1;
          filter: grayscale(0%) brightness(110%);
          z-index: 10;
        }

        .gallery-slider-wrapper .slick-dots li button:before {
          color: white;
          font-size: 14px;
          opacity: 0.3;
        }
        .gallery-slider-wrapper .slick-dots li.slick-active button:before {
          color: #ec4899;
          opacity: 1;
        }
        
        .gallery-slider-wrapper .slick-prev, 
        .gallery-slider-wrapper .slick-next {
          width: 50px;
          height: 50px;
          z-index: 20;
        }
        .gallery-slider-wrapper .slick-prev { left: -30px; }
        .gallery-slider-wrapper .slick-next { right: -30px; }
        
        .gallery-slider-wrapper .slick-prev:before, 
        .gallery-slider-wrapper .slick-next:before {
          font-size: 40px;
          color: rgba(255, 255, 255, 0.7);
          text-shadow: 0 0 10px rgba(236, 72, 153, 0.8);
        }
      `}} />
    </section>
  );
};

export default Gallery;
