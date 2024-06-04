import "./Card.css";

export default function Card({ imagem, funcao }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__bola card__bola--red"></div>
        <div className="card__bola card__bola--orange"></div>
        <div className="card__bola card__bola--yellow"></div>
        <div className="card__bola card__bola--green"></div>
      </div>

      <div className="card__main">
        <img src={imagem} alt="Adriano Melo" />
      </div>

      <div className="card__footer">
        <h3 className="card__cargo">{funcao}</h3>
        <div className="card__funcao">Adriano Melo</div>
      </div>
    </div>
  );
}
