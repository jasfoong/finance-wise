import homeIcon from "../../assets/icons/home-icon.png";
import searchIcon from "../../assets/icons/search-icon.png";
import arrowsIcon from "../../assets/icons/adjacent-arrows-icon.png";
import clockIcon from "../../assets/icons/clock-icon.png";
import "./Footer.scss";


export default function Footer(){
    return(
        <section className="footer__section">
            <li className="footer__list-item">
                <ul className="footer__link-group">
                    <img src={homeIcon} alt="home icon" className="footer__icon" /><a href="/"></a>
                    <img src={searchIcon} alt="search icon" className="footer__icon" /><a href="/"></a>
                    <img src={arrowsIcon} alt="adjacent left and right arrow icon" className="footer__icon" /><a href="/"></a>
                    <img src={clockIcon} alt="clock icon" className="footer__icon" /><a href="/"></a>
                </ul>
            </li>
        </section>
    )
}