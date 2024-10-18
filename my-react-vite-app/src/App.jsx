import React from 'react';
import Navbar from './components/Navbar';
 
import ShowDetail from './components/ShowDetail';
import FavouritesPage from './pages/FavoritesPage';

const App = () => {
    const showId = '123'; // Replace with the actual show ID

    return (
        <div>
            <Navbar />
            <ShowDetail showId={showId} />
            <FavouritesPage />
        </div>
    );
};

export default App;
