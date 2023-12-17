import "../../sass/layout/Visual.scss";
import Round from "../UI/Round";
import Whitepaper from "../../assets/img/image 8.jpg";
import { ReactComponent as DownloadIcon } from "../../assets/svg/material-symbols_download.svg";
import BackgroundText from "../UI/BackgroundText";
import Sphere from "../../assets/img/Sphere.png";

const Visual = () => {
  return (
    <div className="visual">
      <div className="visual__background-top">
        <BackgroundText text="Building" />
      </div>
      <div className="visual__box">
        <Round />
        <img src={Sphere} alt="Sphere" className="sphere" />
        <a href="#" className="visual__whitepaper">
          <img src={Whitepaper} alt="whitepaper" className="visual__photo" />
          <div className="visual__download-box">
            <DownloadIcon className="visual__download" />
          </div>
          <p>
            Download <br /> The whitepaper
          </p>
        </a>
      </div>
      <div className="visual__background-down">
        <BackgroundText text="Future" />
      </div>
      <div className="visual__textbox">
        <h3>Join to building the future.</h3>
        <p>
          OmniVerse is the home of the world's fastest blockchain and the
          fastest growing ecosystem in crypto, with over 800 projects across
          DeFi, NFTs, Web3, and beyond.
        </p>
      </div>
    </div>
  );
};

export default Visual;
