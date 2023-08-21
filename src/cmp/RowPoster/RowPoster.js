import React from 'react';
import './RowPoster.css';
import './RowPosterLarge.css';

const RowPoster = ({ name, img }) => {
  return (
    <img src={img} alt={name} className="row__poster row__posterLarge" />
  )
}


export default RowPoster