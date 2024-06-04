import "./Contato.css";
import nuvem from "assets/images/background.png";
import sol from "assets/images/sol-japones.png";
import Botao from "components/Botao";

export default function Contato() {
  return (
    <section className="contato">
      <div className="contato__container">
        <img src={nuvem} alt="Nuvem" />
        <div className="contato__text">
          <h2 className="contato__titulo">
            Vamos conversar sobre seu novo Site?
          </h2>
          <p className="contato__descricao">
            Com experiência em criar interfaces de usuário interativas e
            responsivas. Utilizo tecnologias como HTML, CSS, JavaScript e
            frameworks modernos para construir soluções eficientes e escaláveis.
            Estou sempre atualizado com as melhores práticas do setor e focado
            em entregar projetos de alta qualidade.
          </p>
          <div className="contato__window">
            <div className="contato__window-header">
              <div className="contato__window-ball contato__window-ball--red"></div>
              <div className="contato__window-ball contato__window-ball--orange"></div>
              <div className="contato__window-ball contato__window-ball--yellow"></div>
              <div className="contato__window-ball contato__window-ball--green"></div>
            </div>
            <div className="contato__window-main">
              <h3>Fale Comigo!</h3>
              <Botao href="/" text="Clique aqui" />
            </div>
          </div>
        </div>
      </div>

      <img className="contato__imagem" src={sol} alt="Sol Japones" />
    </section>
  );
}
