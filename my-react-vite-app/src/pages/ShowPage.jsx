import React from 'react';
import Show from '../components/Show';

const ShowPage = ({ match }) => (
  <div>
    <Show id={match.params.id} />
  </div>
);

export default ShowPage;
