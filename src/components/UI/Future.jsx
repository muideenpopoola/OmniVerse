import "../../sass/components/Future.scss";

import { Fragment } from "react";
import FuturePhoto from "../../assets/img/web3.png";

const Future = () => {
  return (
    <Fragment>
      <h2 className="future__header">Explore the future</h2>
      <div className="future">
        <div className="future__left">
          <p className="future__turn">Technology</p>
          <h3 className="future__title">
            The most trusted way to build future.
          </h3>
          <p className="future__text">
            Powering the Omniverse Hub and its expanding network of sovereign
            chains is the Omniverse SDK, a top-of-the-line blockchain framework.
          </p>
          <p className="future__text">
            The SDK empowers developers to design imaginative applications that
            generate value via exchange with the Omniverse Hub.
          </p>
        </div>
        <div className="future__right">
          <img src={FuturePhoto} alt="" className="future__photo" />
        </div>
      </div>
    </Fragment>
  );
};

export default Future;
