import metadePilar from "assets/images/metade-pilastra.png";
import pilar from "assets/images/pilastra.png";
import Faixa from "components/Faixa";
import "./Processo.css";
import Titulo from "components/Titulo";
import Etapa from "./Etapa";

export default function Processo() {
  return (
    <section className="processo">
      <div className="processo__imagens">
        <div className="processo__pilar">
          <img src={pilar} alt="Pilar" />
          <img src={metadePilar} alt="Pilar" />
        </div>

        <Faixa
          solid={true}
          rotacao="3deg"
          animacao="slide 55s infinite linear"
        />
        <Faixa
          solid={true}
          rotacao="-3deg"
          animacao="slide 55s infinite reverse linear"
        />
      </div>

      <div className="processo__container">
        <Titulo
          color="#fbf3f3"
          size="8rem"
          titulo="Processo de Desenvolvimento"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit iste tempora, consequatur dicta aperiam praesentium inventore dolore. Architecto fuga ullam cum nostrum at modi est quos rerum quaerat! Expedita?"
        />

        <div className="processo__etapas">
          <Etapa
            imagem="escada"
            direction
            padding="0 18rem 0 0"
            width="25%"
            titulo="Planejamento"
            descricao="Definição do propósito do site e os objetivos que deseja alcançar, analisando os concorrentes para entender o que funciona e o que pode ser melhorado."
          />
          <Etapa
            imagem="pilar"
            direction="row-reverse"
            padding="0 0 0 18rem"
            width="21%"
            titulo="Design"
            descricao="Criação da estrutura do site para definir o layout, a navegação, a aparência visual do site, incluindo esquemas de cores, tipografia e imagens."
          />
          <Etapa
            imagem="bolas"
            direction
            padding="0 18rem 0 0"
            width="25%"
            titulo="Desenvolvimento"
            descricao="Implementação do design visual no código, garantindo que o site seja responsivo e funcione bem em diferentes dispositivos."
          />
          <Etapa
            imagem="portal"
            direction="row-reverse"
            padding="0 0 0 6.4rem"
            width="40%"
            titulo="Hospedagem"
            descricao="Configuração do domínio para o site e escolha de um provedor para hospedar o site."
          />
        </div>
      </div>
    </section>
  );
}
