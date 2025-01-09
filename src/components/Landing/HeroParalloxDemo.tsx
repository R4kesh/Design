"use client";
import React from "react";

export function HeroParallaxDemo() {
  return (
    <section className="relative py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white group"
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 ease-in-out"></div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="p-4 relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                  {product.title}
                </h3>
                <a
                  href={product.link}
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  // Add the rest of your product objects here...
];
