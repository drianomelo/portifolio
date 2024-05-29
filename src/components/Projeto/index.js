import "./Projeto.css";
import projeto from "assets/images/projeto-1.jpg";

export default function Projeto({ href }) {
  return (
    <a href={href} className="projeto">
      <div className="projeto__header">
        <div className="projeto__bola"></div>
        <div className="projeto__bola"></div>
        <div className="projeto__bola"></div>
        <div className="projeto__bola"></div>
      </div>

      <div className="projeto__main">
        <img src={projeto} alt="Projeto" />
      </div>
    </a>
  );
}
