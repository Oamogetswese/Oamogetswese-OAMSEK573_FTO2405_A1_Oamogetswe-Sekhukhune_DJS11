import React, { useState } from 'react';

const FavouritesPage = () => {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (item) => {
        setFavourites([...favourites, item]);
    };

    const removeFavourite = (item) => {
        setFavourites(favourites.filter(fav => fav !== item));
    };

    return (
        <div>
            <h1>My Favourites</h1>
            <ul>
                {favourites.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeFavourite(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            {/* Example usage */}
            <button onClick={() => addFavourite('New Favourite Item')}>Add Favourite</button>
        </div>
    );
};

export default FavouritesPage;
