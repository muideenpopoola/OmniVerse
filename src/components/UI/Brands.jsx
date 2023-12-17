import "../../sass/components/Brands.scss";
import { ReactComponent as PAcoin } from "../../assets/svg/PAcoin.svg";
import { ReactComponent as GLXToken } from "../../assets/svg/GLXToken.svg";
import { ReactComponent as Startcoin } from "../../assets/svg/Startcoin.svg";
import { ReactComponent as Kyber } from "../../assets/svg/KyberNetwork.svg";
import { ReactComponent as Karbo } from "../../assets/svg/Karbo.svg";
import { ReactComponent as Revain } from "../../assets/svg/Revain.svg";

const Brands = () => {
  return (
    <div className="brands">
      <ul className="brands__list">
        <li className="brands__item">
          <PAcoin /> OmniSwap
        </li>
        <li className="brands__item">
          <GLXToken /> Garangan
        </li>
        <li className="brands__item">
          <Startcoin /> Sangkalputung
        </li>
        <li className="brands__item">
          <Kyber /> Kreak Network
        </li>
        <li className="brands__item">
          <Karbo /> Kayang
        </li>
        <li className="brands__item">
          <Revain />
          Roldepan
        </li>
      </ul>
    </div>
  );
};

export default Brands;
