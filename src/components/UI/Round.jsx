import "../../sass/components/Round.scss";
import { ReactComponent as Star } from "../../assets/svg/mdi_star-four-points.svg";

const Round = () => {
  return (
    <div className="round">
      <p className="round__text">Building future.</p>
      <p className="round__text">Building future.</p>
      {/* <span className="c1">B</span>
        <span className="c2">u</span>
        <span className="c3">i</span>
        <span className="c4">l</span>
        <span className="c5">d</span>
        <span className="c6">i</span>
        <span className="c7">n</span>
        <span className="c8">g</span>
        <span className="ca"> </span>
        <span className="c9">F</span>
        <span className="c10">u</span>
        <span className="c11">t</span>
        <span className="c12">u</span>
        <span className="c13">r</span>
        <span className="c14">e</span>
        <span className="c15">.</span>

        <span className="c16">B</span>
        <span className="c17">u</span>
        <span className="c18">i</span>
        <span className="c19">l</span>
        <span className="c20">d</span>
        <span className="c21">i</span>
        <span className="c22">n</span>
        <span className="c23">g</span>
        <span className="cb"> </span>
        <span className="c24">F</span>
        <span className="c25">u</span>
        <span className="c26">t</span>
        <span className="c27">u</span>
        <span className="c28">r</span>
        <span className="c29">e</span>
        <span className="c30">.</span>
      </p> */}
      <Star className="round__icon" />
    </div>
  );
};

export default Round;
