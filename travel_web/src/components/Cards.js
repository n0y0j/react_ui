import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image from "../assets/images/img-9.jpg"
import image2 from "../assets/images/img-2.jpg"
import image3 from "../assets/images/img-3.jpg"
import image4 from "../assets/images/img-4.jpg"
import image5 from "../assets/images/img-8.jpg"


function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={image2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src={image3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={image4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={image5}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
