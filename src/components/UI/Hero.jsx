import "../../sass/components/Hero.scss";
import Media from "./Media";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title-box">
        <h2 className="hero__title">
          The <br /> future
        </h2>
      </div>
      <div className="hero__details-box">
        <p className="hero__details">
          Designed for a decentralized future, OmniVerse is a growing ecosystem
          of interdependent apps and services that continually expand and
          evolve.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default Hero;
