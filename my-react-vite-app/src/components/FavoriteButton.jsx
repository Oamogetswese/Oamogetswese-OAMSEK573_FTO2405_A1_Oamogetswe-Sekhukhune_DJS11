 
import React, { useState } from "react";

const FavoriteButton = ({ episode }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    // Save the favorite status to local storage or a database
  };

  return (
    <button onClick={handleClick}>
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;
