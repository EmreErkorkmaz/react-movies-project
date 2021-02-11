import React from "react";
import ReactDom from "react-dom";
import CardItem from "./CardItem";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<CardItem title="test" image="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg" />, div);
});
