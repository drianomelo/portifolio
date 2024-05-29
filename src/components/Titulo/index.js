import "./Titulo.css";

export default function Titulo({ titulo, desc }) {
  return (
    <div className="titulo">
      <h2>{titulo}</h2>
      <p>{desc}</p>
    </div>
  );
}
