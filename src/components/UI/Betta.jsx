import "../../sass/components/Betta.scss";
import { ReactComponent as Wallet } from "../../assets/svg/ic_round-account-balance-wallet.svg";
import { ReactComponent as Magic } from "../../assets/svg/material-symbols_magic-exchange-rounded.svg";

const Betta = () => {
  return (
    <div className="betta">
      <h2 className="betta__header">Unique Value</h2>
      <div className="betta__content-box">
        <div className="content">
          <div className="content__header">
            <Wallet />
            <h4>Beta</h4>
          </div>
          <h3 className="content__title">Wallet Ecosystem</h3>
          <p className="content__text">
            There are a full spectrum of crypto wallets supporting the Omniverse
            ecosystem, including hardware wallets, mobile wallets, and desktop
            wallets. These wallets provide users with a range of options when it
            comes to managing their digital assets, and enable users to choose
            the wallet that best meets their needs.
          </p>
        </div>
        <div className="content">
          <Magic />
          <h3 className="content__title">Interoperability</h3>
          <p className="content__text">
            One of the key benefits of the Omniverse ecosystem is its
            interoperability. By integrating various blockchain networks and
            protocols, Omniverse enables users to seamlessly exchange their
            digital assets across different platforms and services. This
            interoperability is critical to the success of the Omniverse, as it
            enables the platform to reach a wider audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Betta;
