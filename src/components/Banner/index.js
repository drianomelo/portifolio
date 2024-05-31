import Botao from "../Botao";
import Pilar from "../Pilar";
import "./Banner.css";
import nuvem from "assets/images/background.png";
import saturno from "assets/images/saturno.png";
import buraco from "assets/images/buraco-negro.png";

export default function Banner() {
  return (
    <div className="container">
      <img className="container__img" src={nuvem} alt="Background Nuvem" />
      <div className="container__main">
        <Pilar mb="-19rem" secondAnimation="3s" srcPilar="pilar">
          <img src={saturno} alt="Saturno" />
        </Pilar>

        <div className="container__text">
          <span>Eu sou Adriano Melo, Desenvolvedor Front-End</span>

          <h1>
            Construa o site <span>dos sonhos</span>
          </h1>

          <p>
            Com experiência em criar interfaces de usuário interativas e
            responsivas. Utilizo tecnologias como HTML, CSS, JavaScript e
            frameworks modernos para construir soluções eficientes e escaláveis.
            Estou sempre atualizado com as melhores práticas do setor e focado
            em entregar projetos de alta qualidade.
          </p>

          <div className="container__btns">
            <Botao href="/" text="Meu Curriculo"></Botao>
            <Botao href="/" text="Meu Portifólio"></Botao>
          </div>
        </div>

        <Pilar mb="-16rem" secondAnimation="2s" srcPilar="pilar">
          <img src={buraco} alt="Saturno" />
        </Pilar>
      </div>
    </div>
  );
}
