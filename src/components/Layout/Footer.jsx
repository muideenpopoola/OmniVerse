import "../../sass/layout/Footer.scss";

import { ReactComponent as Arrow } from "../../assets/svg/Arrow - Right Circle.svg";
import { useState } from "react";

const Footer = () => {
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const emailInputHandler = (event) => {
    if (event.target.value.includes("@")) {
      setInputIsValid(true);
    }
  };

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
  };

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
        <form onSubmit={formSubmitHandler} className="footer__form">
          <input
            type="email"
            placeholder="Enter your mail"
            className="footer__input"
            onChange={emailInputHandler}
            onBlur={inputBlurHandler}
          />
          <button className="footer__button">
            <Arrow />
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
