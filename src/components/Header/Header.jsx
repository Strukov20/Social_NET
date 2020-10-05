import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="app__header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/863px-Apple_logo_black.svg.png" className="app__logo" alt="logo" />
            <div className="app__title">Social LLC.</div>
        </header>
    )
}

export default Header;