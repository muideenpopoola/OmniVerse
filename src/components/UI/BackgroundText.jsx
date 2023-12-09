import "../../sass/components/BackgroundText.scss";

const BackgroundText = (props) => {
  return (
    <div className="background">
      <p className="background__text">{props.text}</p>
    </div>
  );
};

export default BackgroundText;
