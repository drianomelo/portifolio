import "./Botao.css";

export default function Botao({ href, text }) {
  return (
    <a className="btn" href={href}>
      <div className="btn__name">{text}</div>
      <div className="btn__name">{text}</div>
      <div className="btn__name">{text}</div>

      <div className="btn__color btn__color--red"></div>
      <div className="btn__color btn__color--orange"></div>
      <div className="btn__color btn__color--yellow"></div>
      <div className="btn__color btn__color--green"></div>
    </a>
  );
}
