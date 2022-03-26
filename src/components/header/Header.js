import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h4 className='siteName'>CineMovie</h4>
            <div className='nav-links'>
                <a href="/home">Home</a><a href="/Movies">Movies</a><a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;