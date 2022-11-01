import React from 'react';
import { BiLockOpen } from "react-icons/bi"

const Price = ({items, Heading}) => {
  return (
    <>
      <div className="about_price">
        <Heading title="Fair Price" />
        <div className="about_price_content">
          {items.price.map((item) => (
            <div className="cards">
              <i>{item.icon}</i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <h1>${item.pri}</h1>
              <p>per price</p>

              <button className="button">
                <BiLockOpen className="icons" />
                <span>LET'S START</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Price