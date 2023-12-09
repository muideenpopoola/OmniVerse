import "../../sass/layout/Visual.scss";
import Round from "../UI/Round";
import Whitepaper from "../../assets/img/image 8.jpg";
import { ReactComponent as DownloadIcon } from "../../assets/svg/material-symbols_download.svg";

const Visual = () => {
  return (
    <div className="visual">
      <Round />
      <div className="visual__sphere"></div>
      <a href="#" className="visual__whitepaper">
        <img src={Whitepaper} alt="whitepaper" className="visual__photo" />
        <div className="visual__download-box">
          <DownloadIcon className="visual__download" />
        </div>
      </a>
    </div>
  );
};

export default Visual;
