import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <div className="footer__title">Zamówienia</div>
          <a href="/" className="footer__link">Dostawa</a>
          <a href="/" className="footer__link">Zwroty i reklamacje</a>
          <a href="/" className="footer__link">Status zamówienia</a>
          <a href="/" className="footer__link">Raty</a>
        </div>
        <div className="footer__section">
          <div className="footer__title">Pomocne linki</div>
          <a href="/" className="footer__link">Poradniki</a>
          <a href="/" className="footer__link">Aktualności</a>
          <a href="/" className="footer__link">Wyprzedaż</a>
          <a href="/" className="footer__link">Karty podarunkowe</a>
        </div>
        <div className="footer__section">
          <div className="footer__title">ONLINE STORE</div>
          <a href="/" className="footer__link">O nas</a>
          <a href="/" className="footer__link">Dane firmy</a>
          <a href="/" className="footer__link">Polityka prywatności i cookies</a>
          <a href="/" className="footer__link">Regulamin sklepu</a>
        </div>
        <div className="footer__section">
          <div className="footer__title">Kontakt</div>
          <a href="/" className="footer__link">
            <i className="fa-solid fa-phone footer__icon"></i>46 738 09 98
          </a>
          <a href="/" className="footer__link footer__link--marked">pn-pt 8:00-21:00</a>
          <a href="/" className="footer__link footer__link--marked">sob-niedz 8:00-19:00</a>
          <a href="/" className="footer__link">
            <i className="fa-solid fa-envelope footer__icon"></i>online-store@online-store.pl
          </a>
          <a href="/" className="footer__link">
            <i className="fa-solid fa-location-dot footer__icon"></i>Salon online store
          </a>
          <a href="/" className="footer__link">
            <i className="fa-brands fa-facebook footer__icon"></i>
            <i className="fa-brands fa-instagram-square footer__icon"></i>
            <i className="fa-brands fa-youtube footer__icon"></i>
            <i className="fa-brands fa-twitter-square footer__icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
