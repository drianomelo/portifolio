import "./Portifolio.css";
import arco from "assets/images/arco.png";
import metadeArco from "assets/images/metade-arco.png";
import nuvem from "assets/images/nuvem.png";
import Botao from "components/Botao";
import Faixa from "components/Faixa";
import Pilar from "components/Pilar";
import Projeto from "components/Projeto";
import Titulo from "components/Titulo";

export default function Portifolio() {
  return (
    <div className="portifolio">
      <div className="portifolio__imagens">
        <div className="portifolio__arco">
          <img src={arco} alt="Arco" />
          <img src={metadeArco} alt="Arco" />
        </div>
        <Faixa
          solid={false}
          rotacao="-4deg"
          animacao="slide 35s infinite linear"
        />
        <Faixa
          solid={false}
          rotacao="2deg"
          animacao="slide 35s infinite reverse linear"
        />
        <img src={nuvem} alt="Nuvem" className="portifolio__nuvem" />
      </div>
      <div className="portifolio__container">
        <Titulo
          titulo="Meus Projetos"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit iste tempora, consequatur dicta aperiam praesentium inventore dolore. Architecto fuga ullam cum nostrum at modi est quos rerum quaerat! Expedita?"
        ></Titulo>
        <div className="portifolio__projetos">
          <Projeto
            href="https://portalsei.saocristovao.se.gov.br"
            imagem="https://i.ibb.co/Zh3FZ3d/projeto-1.jpg"
            titulo="Portal SEI"
            ferramentas={["Laravel", "Tailwind", "Javascript"]}
          />
          <Projeto
            href="https://saocristovao.se.gov.br"
            imagem="https://i.ibb.co/5YcKfSF/ouvidoria-novo.jpg"
            titulo="Portal São Cristóvão"
            ferramentas={["Laravel", "Tailwind", "Javascript"]}
          />
          <Projeto
            href="https://portalsei.saocristovao.se.gov.br"
            imagem="https://i.ibb.co/Zh3FZ3d/projeto-1.jpg"
            titulo="Portal SEI"
            ferramentas={["Laravel", "Tailwind", "Javascript"]}
          />
          <Projeto
            href="https://saocristovao.se.gov.br"
            imagem="https://i.ibb.co/5YcKfSF/ouvidoria-novo.jpg"
            titulo="Portal São Cristóvão"
            ferramentas={["Laravel", "Tailwind", "Javascript"]}
          />
        </div>

        <Pilar pad="3rem" mb="0rem" secondAnimation="0s" srcPilar="pilarMaior">
          <h3>Gostou do que viu?</h3>
          <Botao href="/" text="Fale Comigo" />
        </Pilar>
      </div>
    </div>
  );
}
