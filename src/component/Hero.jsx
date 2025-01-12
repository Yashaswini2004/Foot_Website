import React from "react";
import amazon_icon from "../assets/amazon.png";
import flipkart_icon from "../assets/flipkart.png";
import hero from "../assets/hero-image.png";
import  "../App.css";
export default function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={amazon_icon} alt="Amazon" />
            <img src={flipkart_icon} alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
         <img src={hero} />
      </div>
    </main>
  );
}
