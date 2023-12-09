import "../../sass/components/Media.scss";

const Media = () => {
  return (
    <div className="box">
      <ul className="media">
        <li className="media__item">
          <a href="" className="media__link">
            Twitter
          </a>
        </li>
        <span>/</span>
        <li className="media__item">
          <a href="" className="media__link">
            Tele...
          </a>
        </li>
        <span>/</span>
        <li className="media__item">
          <a href="" className="media__link">
            Disc...
          </a>
        </li>
        <span>/</span>
        <li className="media__item">
          <a href="" className="media__link">
            Git...
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Media;
