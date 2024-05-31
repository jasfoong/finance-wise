import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/Wealthsimple.svg";
import user from "../../assets/icons/user.svg";
import gift from "../../assets/icons/gifts.svg";
import "./Header.scss"

const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="header__logo-image" />
                </Link>
            </div>
            <div className="header__icon">
                <Link to="/">
                    <img src={gift} alt="Gift" className="header__icon-gift" />
                </Link>
            </div>
            <div className="header__icon">
                <Link to="/">
                    <img src={user} alt="User" className="header__icon-user" />
                </Link>
            </div>
        </header>
    )
};

export default Header;