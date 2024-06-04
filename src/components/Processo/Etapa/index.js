import "./Etapa.css";
import nuvem from "assets/images/nuvem.png";
import escada from "assets/images/escada.png";
import pilar from "assets/images/pilar-branco.png";
import bolas from "assets/images/bolas.png";
import portal from "assets/images/portal.png";
import iconBloco from "assets/images/icon-bloco.png";
import iconSaturno from "assets/images/icon-saturno.png";
import iconEstrela from "assets/images/estrela.png";
import iconMouse from "assets/images/icon-mouse.png";

export default function Etapa({
  imagem,
  direction,
  padding,
  width,
  titulo,
  descricao,
}) {
  let src;
  let icon;

  if (imagem === "escada") {
    src = escada;
    icon = iconBloco;
  } else if (imagem === "pilar") {
    src = pilar;
    icon = iconEstrela;
  } else if (imagem === "bolas") {
    src = bolas;
    icon = iconSaturno;
  } else if (imagem === "portal") {
    src = portal;
    icon = iconMouse;
  }

  return (
    <div
      className="etapa"
      style={{ flexDirection: direction, padding: padding }}
    >
      <div className="etapa__nuvem">
        <img src={nuvem} alt="Nuvem" />
        <div className="etapa__text">
          <img src={icon} alt="Icone da etapa" className="etapa__icon" />
          <h4 className="etapa__titulo">{titulo}</h4>
          <p className="etapa__descricao">{descricao}</p>
        </div>
      </div>
      <img
        className="etapa__imagem"
        src={src}
        alt="Etapa de Desenvolvimento"
        style={{
          width: width,
        }}
      />
    </div>
  );
}
