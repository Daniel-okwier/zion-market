import React from "react";
import heroImage from "../../assets/images/hero/zion-hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-zionGray"
    >
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zionGray to-white" />

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-20 lg:pt-32 lg:pb-32">
        {/* Flex layout: Reversed on mobile (image first), normal on desktop */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* LEFT: Copy & CTA */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-heading font-bold text-zionDark leading-tight">
              Fresh groceries, <br />
              <span className="text-zionGreen">picked with care</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Shop a wide variety of quality groceries and everyday essentials.
              Simple ordering, fair prices, and a market you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zionOrange text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Shop Now
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zionGreen text-zionGreen font-semibold hover:bg-zionGreen hover:text-white transition-colors duration-300"
              >
                Visit Our Store
              </a>
            </div>
          </div>

          {/* RIGHT: Visual (Modernized with Masking/Effects) */}
          <div className="w-full lg:w-1/2 relative">
            {/* Subtle glow/blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-zionOrange/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Zion Market online grocery shopping"
                className="w-full max-w-md md:max-w-lg mx-auto drop-shadow-2xl rounded-2xl transform lg:hover:rotate-2 transition-transform duration-500"
                loading="eager"
              />
              
              {/* Optional: Add a small floating card for "modern" feel */}
              <div className="absolute -bottom-6 -left-4 bg-white p-4 rounded-xl shadow-xl hidden md:flex items-center gap-3 animate-bounce-slow">
                <div className="bg-zionGreen/20 p-2 rounded-full text-zionGreen">
                  <span className="font-bold">100%</span>
                </div>
                <p className="text-sm font-semibold text-zionDark leading-none">Organic & <br/>Fresh Daily</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}