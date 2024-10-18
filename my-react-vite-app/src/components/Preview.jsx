import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PreviewList = () => {
    const [previews, setPreviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPreviews = async () => {
            try {
                const response = await axios.get('https://podcast-api.netlify.app/previews');
                setPreviews(response.data);
            } catch (err) {
                setError('Error fetching previews: ' + err.message);
            }
        };

        fetchPreviews();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Preview List</h1>
            <ul>
                {previews.map((preview) => (
                    <li key={preview.id}>
                        <h2>{preview.title}</h2>
                        <p>{preview.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreviewList;
