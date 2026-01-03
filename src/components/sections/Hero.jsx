import React from "react";
import heroImage from "../../assets/images/hero/zion-hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-zionGray"
    >
      {/* Soft background gradient — blends with body */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zionGray to-white" />

      <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Copy & CTA */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-zionDark leading-tight">
              Fresh groceries, <br />
              <span className="text-zionGreen">picked with care</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Shop a wide variety of quality groceries and everyday essentials.
              Simple ordering, fair prices, and a market you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

          {/* RIGHT: Visual (blended, not boxed) */}
          <div className="relative">
            {/* subtle glow behind image */}
            <div className="absolute -inset-6 bg-zionOrange/10 rounded-full blur-3xl" />

            <img
              src={heroImage}
              alt="Zion Market online grocery shopping"
              loading="eager"
              decoding="async"
              className="relative w-full max-w-xl mx-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
