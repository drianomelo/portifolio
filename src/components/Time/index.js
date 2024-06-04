import Titulo from "components/Titulo";
import "./Time.css";
import Card from "./Card";
import buraco1 from "assets/images/buraco-estrela-1.png";
import buraco2 from "assets/images/buraco-estrela-2.png";

export default function Time() {
  return (
    <section className="time">
      <div className="time__container">
        <Titulo
          color="#1e3a8a"
          size="8rem"
          titulo="Nossa Equipe"
          desc="Eu faço muitas coisas por aqui."
        />
        <div className="time__cards">
          <Card imagem="https://i.ibb.co/X420x3S/adriano.jpg" funcao="CEO" />
          <Card
            imagem="https://github.com/drianomelo.png"
            funcao="Desenvolvedor Front-End"
          />
          <Card
            imagem="https://i.ibb.co/X420x3S/adriano.jpg"
            funcao="Designer"
          />
          <Card
            imagem="https://i.ibb.co/X420x3S/adriano.jpg"
            funcao="Designer"
          />
          <Card
            imagem="https://i.ibb.co/X420x3S/adriano.jpg"
            funcao="Designer"
          />
        </div>
      </div>

      <img
        className="time__buraco time__buraco--left"
        src={buraco1}
        alt="Buraco"
      />
      <img
        className="time__buraco time__buraco--right"
        src={buraco2}
        alt="Buraco"
      />
    </section>
  );
}
