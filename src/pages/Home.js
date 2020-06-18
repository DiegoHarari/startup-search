import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

function Home() {
  const cards = useSelector((state) => state?.startups);
  const [filteredCards, setFilteredCards] = useState(cards);

  function handleSearch(value) {
    const result = cards.filter((card) => {
      const normalizedName = card.name.toLowerCase();
      const normalizedValue = value.toLowerCase();

      return normalizedName.includes(normalizedValue);
    });

    setFilteredCards(result);
  }

  return (
    <React.Fragment>
      <Navbar canSearch handleChange={handleSearch} />
      <Cards cards={filteredCards} />
    </React.Fragment>
  );
}

export default Home;
