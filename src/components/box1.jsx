import React from 'react';
import dots from '../assets/dots.svg'

export function CustomerHoldingsWidget1() {
  return (
    <div className="widget1-10">
      <div className="flex-container1">
        <span>Admin Holdings</span>
        <img className="dots" src={dots} alt="dots" />
      </div>
      <div className="background1">
        <div className="flex-container1-1">
          <span>Monetary Value (£)</span>
          <span className="quantity-g">Quantity (g)</span>
        </div>
        <div className="flex-container1-2">
          <span className="num-4500">£4,500</span>
          <span className="num-56543-g">45.564 g</span>
        </div>
        <div className="flex-container1-3">
          <span>Last 24 hrs</span>
          <span>Last 24 hrs</span>
        </div>
        <div className="flex-container1-4">
          <span>-£250.00</span>
          <span>-45.235 g</span>
        </div>
      </div>
    </div>
  );
}
