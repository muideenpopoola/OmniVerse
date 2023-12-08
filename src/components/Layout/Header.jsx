import { ReactComponent as WavingHand } from "../../assets/svg/fluent-emoji_waving-hand.svg";
import "../../sass/layout/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">OmniVerse.</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="#">
              Technology
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#">
              Developers
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#">
              Community
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#">
              Blog
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#">
              About
            </a>
          </li>
        </ul>
      </nav>
      <a href="" className="header__button">
        Let's Build
        <WavingHand />
      </a>
    </header>
  );
};

export default Header;
