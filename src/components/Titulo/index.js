import "./Titulo.css";

export default function Titulo({ titulo, desc, color, size }) {
  return (
    <div className="titulo">
      <h2 style={{ color: color, fontSize: size }}>{titulo}</h2>
      <p style={{ color: color }}>{desc}</p>
    </div>
  );
}
