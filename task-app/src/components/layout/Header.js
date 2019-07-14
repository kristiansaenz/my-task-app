import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
    return (
        <header>
            <h1>My Task App</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </header>
    )
}

export default Header;