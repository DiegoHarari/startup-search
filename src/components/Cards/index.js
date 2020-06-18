import React from "react";
import Card from "../Card";
import { useSelector } from "react-redux";

import "./style.scss";

function Cards({ cards }) {
  // const cards = useSelector((state) => state?.startups);
  const [name, description] = cards;

  return (
    <section className='mainContainer'>
      {cards &&
        cards.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.name}
              description={card.description}
            />
          );
        })}
    </section>
  );
}

export default Cards;
