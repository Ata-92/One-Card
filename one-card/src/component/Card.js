import React from "react";
import image from "./lorem-ipsum.png";

function Card() {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Lorem Logo" />
      <h1 className="card-header">Lorem Ipsum</h1>
      <p className="card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo fuga quia ullam sequi consectetur assumenda dolore officia, possimus vitae ad.</p>
      <a className="card-footer" href="#">VIEW MORE</a>
    </div>
  )
}

export default Card;
