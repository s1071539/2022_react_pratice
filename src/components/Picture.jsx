import React from "react";

const Picture = ({ content }) => {
  return (
    <div className="myPhoto">
      <p>{content.photographer}</p>
      <div className="photoContainer">
        <img src={content.src.large} alt={content.src.large} />
      </div>
    </div>
  );
};

export default Picture;
