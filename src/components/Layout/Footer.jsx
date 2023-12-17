import "../../sass/layout/Footer.scss";

import { ReactComponent as Arrow } from "../../assets/svg/Arrow - Right Circle.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__unlock">
        Unlock the limitless potential of decentralized finance with Omniverse.
      </div>
      <div className="footer__pages">
        <h3 className="footer__title">Pages</h3>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="" className="footer__link">
              How it works
            </a>
          </li>
          <li className="footer__item">
            <a href="" className="footer__link">
              Community
            </a>
          </li>
          <li className="footer__item">
            <a href="" className="footer__link">
              Upload
            </a>
          </li>
          <li className="footer__item">
            <a href="" className="footer__link">
              Connect to wallet
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__info">
        <h3 className="footer__title">Info</h3>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="" className="footer__link">
              Download
            </a>
          </li>
          <li className="footer__item">
            <a href="" className="footer__link">
              Support
            </a>
          </li>
          <li className="footer__item">
            <a href="" className="footer__link">
              Donate
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__newsletter">
        <h3 className="footer__title">Join Newsletter</h3>
        <p className="footer__item">
          Subscribe to our newsletter to get weekly update on the potential of
          decentralized finance
        </p>
        <div className="footer__form">
          <input
            type="email"
            placeholder="Enter your mail"
            className="footer__input"
          />
          <button type="submit" className="footer__button">
            <Arrow />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
