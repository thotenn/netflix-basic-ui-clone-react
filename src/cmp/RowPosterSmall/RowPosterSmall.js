import React from 'react';
import '../RowPoster/RowPoster.css';

const RowPosterSmall = ({ name, img }) => {
  return (
        <img src={img} alt={name} className="row__poster" />
  )
}


export default RowPosterSmall