import "../../sass/components/Round.scss";
import { ReactComponent as Star } from "../../assets/svg/mdi_star-four-points.svg";
import circleText from "../../assets/img/inkpx-curved-text.png";

const Round = () => {
  return (
    <div className="round">
      <img src={circleText} alt="" className="round__photo" />
      <Star className="round__icon" />
    </div>
  );
};

export default Round;
