import React from 'react';
import image from '../assets/img/hero/category.jpg'
export default function Slider({heading}) {
    return (
        <div className="slider-area ">
    {/* Mobile Menu */}
    <div className="single-slider slider-height2 d-flex align-items-center" style={{backgroundImage:`url(${image})`}} >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
                  <h2>{heading}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}