import React from "react";

const Picture = ({ content }) => {
  return (
    <div>
      <fieldset>
        <legend>{content.photographer}</legend>
        <img src={content.src.medium} alt={content.src.medium} />
      </fieldset>
    </div>
  );
};

export default Picture;
