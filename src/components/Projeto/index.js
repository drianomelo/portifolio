import "./Projeto.css";

export default function Projeto({ href, imagem, titulo, ferramentas }) {
  return (
    <a href={href} target="_blank" className="projeto">
      <div className="projeto__header">
        <div className="projeto__bola projeto__bola--red"></div>
        <div className="projeto__bola projeto__bola--orange"></div>
        <div className="projeto__bola projeto__bola--yellow"></div>
        <div className="projeto__bola projeto__bola--green"></div>
      </div>

      <div className="projeto__main">
        <img src={imagem} alt="Projeto" />

        <i className="fa-solid fa-eye"></i>
      </div>

      <div className="projeto__footer">
        <h3>{titulo}</h3>
        <div className="projeto__ferramentas">
          {ferramentas.map((ferramenta, index) => (
            <p key={index}>
              {ferramenta}
              <i className="fa-solid fa-circle"></i>
            </p>
          ))}
        </div>
      </div>
    </a>
  );
}
