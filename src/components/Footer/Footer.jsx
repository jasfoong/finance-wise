import homeIcon from "../../assets/icons/home-icon.png";
import activeHomeIcon from "../../assets/icons/active-home-icon.png";
import searchIcon from "../../assets/icons/search-icon.png";
import activeSearchIcon from "../../assets/icons/active-search-icon.png";
import arrowsIcon from "../../assets/icons/adjacent-arrows-icon.png";
import activeArrowsIcon from "../../assets/icons/active-adjacent-arrows-icon.png";
import clockIcon from "../../assets/icons/clock-icon.png";
import "./Footer.scss";
import { useState } from "react";


export default function Footer(){
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <section className="footer__section">
            <li className="footer__list-item">
                <ul className="footer__link-group">
                    <a href="/" className="footer__link" onClick={() => handleLinkClick('/')}>
                        <img src={activeLink === '/' ? activeHomeIcon : homeIcon} alt="home icon" className="footer__icon" />
                    </a>
                    <a href="/account" className="footer__link" onClick={() => handleLinkClick('/account')}>
                        <img src={activeLink === '/account' ? activeSearchIcon : searchIcon} alt="search icon" className="footer__icon" />
                    </a>
                    <a href="/account" className="footer__link" onClick={() => handleLinkClick('/account')}>
                        <img src={activeLink === '/account' ? activeArrowsIcon : arrowsIcon} alt="adjacent left and right arrow icon" className="footer__icon" />
                    </a>
                    <a href="/account" className="footer__link">
                        <img src={clockIcon} alt="clock icon" className="footer__icon" />
                    </a>
                </ul>
            </li>
        </section>
    )
}