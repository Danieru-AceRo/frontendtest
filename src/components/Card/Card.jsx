import React from "react";
import Dropdown from "../Dropdown/Dropdown"
import './Card.css'
const image = 'images/'

const Card = ( { travel }) => {
  return (
    <div className="card">
      <div className="card-inside">
        <div className="card-img">
          <img src={image + travel.image} alt={travel.title + " image"} />
        </div>
        <div className="card-body">
          <div className="card-header">
            <h3 className="card-title">{travel.title}</h3>
            <div className="card-review">
                <span>{travel.score}/10</span> <small>{travel.opinions} opiniones</small> <small className="travel"> | {travel.travelers} viajeros</small>
            </div>
          </div>
          <div className="card-description">
            {travel.description}
          </div>
        </div>
      </div>
      <div className="price">
        <span className="discount">{travel.discount}</span>
        <strong className="sale">{travel.price}</strong>
      </div>
      <p className="share" id=""><Dropdown number={travel.id}/></p>
    </div>
  );
};

export default Card;
