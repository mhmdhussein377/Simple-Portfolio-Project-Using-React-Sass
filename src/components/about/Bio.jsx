import React from 'react';
import signiture from "./../../images/bio.png"

const Bio = ({items, Heading}) => {
  return (
    <>
      <Heading title="Short Bio" />
      <div className="about_details_bio">
        {items.bio.map((val) => (
          <>
            <div className="about_details_bio_box">
              <div className="about_details_bio_box_item">{val.para1}</div>
              <div className="about_details_bio_box_item">{val.para2}</div>
              <div className="about_details_bio_box_item">{val.para3}</div>
              <div className="about_details_bio_box_item">
                <img src={signiture} alt="" />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Bio