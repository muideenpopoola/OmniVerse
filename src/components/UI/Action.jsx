import "../../sass/components/Action.scss";
import Cube1 from "../../assets/img/Cube1.png";
import Cube2 from "../../assets/img/Cube2.png";
import Cube3 from "../../assets/img/Cube3.png";
import Cube4 from "../../assets/img/Cube4.png";
import { ReactComponent as Twitter } from "../../assets/svg/bytesize_twitter.svg";
import { ReactComponent as Reddit } from "../../assets/svg/line-md_reddit.svg";
import { ReactComponent as Discord } from "../../assets/svg/ic_baseline-discord.svg";
import { ReactComponent as Telegram } from "../../assets/svg/bytesize_twitter.svg";

const Action = () => {
  return (
    <div className="action">
      <div className="action__left">
        <img src={Cube1} alt="" className="action__photo" />
        <img src={Cube2} alt="" className="action__photo" />
      </div>
      <div className="action__center">
        <p className="action__text">
          Stay in the loop on feature releases, events and announcements
        </p>
        <div className="action__icons">
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Reddit />
          </a>
          <a href="#">
            <Discord />
          </a>
          <a href="#">
            <Telegram />
          </a>
        </div>
      </div>
      <div className="action__right">
        <img src={Cube3} alt="" className="action__photo" />
        <img src={Cube4} alt="" className="action__photo" />
      </div>
    </div>
  );
};

export default Action;
