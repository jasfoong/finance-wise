import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/logo.png";
import user from "../../assets/icons/user.svg";
import gift from "../../assets/icons/gifts.svg";
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="Logo" className="header__logo-image" />
                </Link>
            </div>
            <div className="header__icon">
                <div className='header__icon-gift'>
                    <img src={gift} alt="Gift-icon" />
                </div>
                <div className="header__icon-user">
                    <img src={user} alt="User-icon"/>
                </div>
            </div>
      </div>
    );
};

export default Header;