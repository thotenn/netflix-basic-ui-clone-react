import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <div className='banner' style={{ backgroundImage: "url('images/banner.jpg')" }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>Money Heits</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <div className='banner__description'>
                Sunt ut ad dolore elit labore sint consectetur nostrud elit elit laboris mollit esse.
            </div>
        </div>
        <div className='banner--fadeBottom'></div>
    </div>
  )
}


export default Header