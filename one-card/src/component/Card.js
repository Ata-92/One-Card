import React from "react";
import image from "./lorem-ipsum.png";
import "./Card.css";

function Card() {
  return (
    <div className="card rounded-5">
      <img className="card-img-top" src={image} alt="Lorem Logo" />
      <div>
      <h1 className="card-header mt-4 fw-bold">Lorem Ipsum</h1>
      <p className="card-body fw-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo fuga quia ullam sequi consectetur assumenda dolore officia, possimus vitae ad.</p>
      </div>
      <button className="card-footer text-info mb-2">VIEW MORE</button>
    </div>
  )
}

export default Card;
