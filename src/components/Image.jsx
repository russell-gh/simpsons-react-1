import React from "react";

const Image = (props) => {
  const { image, name } = props;

  return <img src={image} alt={name} />;
};

export default Image;
