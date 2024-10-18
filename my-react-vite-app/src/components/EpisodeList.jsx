import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EpisodeList = ({ showId }) => {
    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await axios.get(`https://podcast-api.netlify.app/shows/${showId}/episodes`);
                setEpisodes(response.data);
            } catch (err) {
                setError('Error fetching episodes: ' + err.message);
            }
        };

        fetchEpisodes();
    }, [showId]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Episode List</h1>
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.id}>
                        <h2>{episode.title}</h2>
                        <p>{episode.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EpisodeList;
