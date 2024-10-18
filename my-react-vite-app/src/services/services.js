import axios from 'axios';

const API_BASE_URL = 'https://podcast-api.netlify.app';

// Function to get genres
export const getGenres = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/genres`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching genres: ' + error.message);
    }
};

// Function to get previews
export const getPreviews = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/previews`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching previews: ' + error.message);
    }
};

// Function to get episodes for a specific show
export const getEpisodes = async (showId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/shows/${showId}/episodes`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching episodes: ' + error.message);
    }
};
