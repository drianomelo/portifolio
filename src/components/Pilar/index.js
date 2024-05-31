import "./Pilar.css";
import pilar from "assets/images/pilar.png";
import pilarMaior from "assets/images/pilar-maior.png";

export default function Pilar({
  children,
  mb,
  secondAnimation,
  srcPilar,
  pad,
}) {
  const animation = `float ${secondAnimation} infinite alternate ease-in-out`;
  const tamanhoPilar = srcPilar === "pilar" ? pilar : pilarMaior;

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
        <div className="pilar__window-main" style={{ padding: `0 ${pad}` }}>
          {children}
        </div>
      </div>

      <img className="pilar__img" src={tamanhoPilar} alt="Pilar" />
    </div>
  );
}
