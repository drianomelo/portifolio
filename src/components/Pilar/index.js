import "./Pilar.css";
import pilar from "assets/images/pilar.png";

export default function Pilar({ children, mb, secondAnimation }) {
  const animation = `float ${secondAnimation} infinite alternate ease-in-out`;

  return (
    <div
      className="pilar"
      style={{
        marginBottom: mb,
      }}
    >
      <div
        className="pilar__window"
        style={{
          animation: animation,
        }}
      >
        <div className="pilar__window-header">
          <div className="pilar__window-ball pilar__window-ball--red"></div>
          <div className="pilar__window-ball pilar__window-ball--orange"></div>
          <div className="pilar__window-ball pilar__window-ball--yellow"></div>
          <div className="pilar__window-ball pilar__window-ball--green"></div>
        </div>
        <div className="pilar__window-main">{children}</div>
      </div>

      <img className="pilar__img" src={pilar} alt="Pilar" />
    </div>
  );
}
