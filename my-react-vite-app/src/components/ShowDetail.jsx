import React from 'react';
import EpisodeList from './EpisodeList';

const ShowDetail = ({ showId }) => {
    return (
        <div>
            <h1>Show Details</h1>
            <EpisodeList showId={showId} />
        </div>
    );
};

export default ShowDetail;

