import React from "react";
import { Link, useLocation } from "react-router-dom";


import "./Footer.scss";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className={`footer ${(location.pathname === "/logowanie" || location.pathname === "/rejestracja") && "footer--hide"}`}>
      <div className="footer__content">
        <div className="footer__section">
          <div className="footer__title">Zamówienia</div>
          <Link to="/dostawa" className="footer__link">Dostawa</Link>
          <Link to="/zwroty-i-reklamacje" className="footer__link">Zwroty i reklamacje</Link>
          <Link to="/status-zamowienia" className="footer__link">Status zamówienia</Link>
          <Link to="/raty" className="footer__link">Raty</Link>
        </div>
        <div className="footer__section">
          <div className="footer__title">Pomocne linki</div>
          <Link to="/poradniki" className="footer__link">Poradniki</Link>
          <Link to="/aktualnosci" className="footer__link">Aktualności</Link>
          <Link to="/wyprzedaz" className="footer__link">Wyprzedaż</Link>
          <Link to="/karty-podarunkowe" className="footer__link">Karty podarunkowe</Link>
        </div>
        <div className="footer__section">
          <div className="footer__title">ONLINE STORE</div>
          <Link to="/o-nas" className="footer__link">O nas</Link>
          <Link to="/dane-firmy" className="footer__link">Dane firmy</Link>
          <Link to="/polityka-prywatnosci-i-cookies" className="footer__link">Polityka prywatności i cookies</Link>
          <Link to="/regulamin-sklepu" className="footer__link">Regulamin sklepu</Link>
        </div>
        <div className="footer__section">
          <div className="footer__title">Kontakt</div>
          <Link to="/kontakt" className="footer__link">
            <i className="fa-solid fa-phone footer__icon"></i>46 738 09 98
          </Link>
          <span className="footer__link footer__link--disabled">pn-pt 8:00-21:00</span>
          <span className="footer__link footer__link--disabled">sob-niedz 8:00-19:00</span>
          <Link to="/kontakt" className="footer__link">
            <i className="fa-solid fa-envelope footer__icon"></i>online-store@online-store.pl
          </Link>
          <Link to="/kontakt" className="footer__link">
            <i className="fa-solid fa-location-dot footer__icon"></i>Salon online store
          </Link>
          <div className="footer__link">
            <i className="fa-brands fa-facebook footer__icon"></i>
            <i className="fa-brands fa-instagram-square footer__icon"></i>
            <i className="fa-brands fa-youtube footer__icon"></i>
            <i className="fa-brands fa-twitter-square footer__icon"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
