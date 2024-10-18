import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="/">Home</a></li>
                <li className="navbar-item"><a href="/shows">Shows</a></li>
                <li className="navbar-item"><a href="/favourites">Favourites</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

