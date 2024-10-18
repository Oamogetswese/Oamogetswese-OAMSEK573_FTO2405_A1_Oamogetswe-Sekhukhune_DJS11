import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://podcast-api.netlify.app');
        const sortedShows = response.data.sort((a, b) => a.title.localeCompare(b.title));
        setShows(sortedShows);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  if (!shows.length) return <div>Loading...</div>;

  return (
    <div>
      {shows.map(show => (
        <div key={show.id} className="show-preview">
          <h2><Link to={`/show/${show.id}`}>{show.title}</Link></h2>
          <p>{show.description}</p>
          <img src={show.previewImage} alt={show.title} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
