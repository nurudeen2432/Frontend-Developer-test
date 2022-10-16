import React from "react";

const Arts = ({ image }) => {
  return (
    <div>
      <img src={image.url} alt="Arts Images" style={{ width: "50%" }} />

      <h3 style={{ color: "#fff" }}>{image.title}</h3>

      <p style={{ color: "#fff" }}>{image.publication}</p>

      <p style={{ color: "#fff", maxWidth: "160px" }}>{image.id}</p>
    </div>
  );
};

export default Arts;
