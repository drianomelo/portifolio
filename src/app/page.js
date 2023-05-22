export default function Home() {
  return (
    <div className="h-screen bg-background-dark bg-cover flex  items-center flex-col">
      <div>
        <img
          className="w-64 m-2"
          src="/img/logo.png"
          alt="logo Driano.css"
        ></img>
      </div>
      <div className="w-lg h-md bg-border-medium p-6 border-t-2 border-b border-x-2 border-border-light border-x-4 shadow-3xl relative bottom-7">
        <div className="w-full h-full bg-cenario bg-cover px-6 py-4 border-t-8 border-l-4 border-r-4 border-border-dark flex flex-col justify-between">
          <header className="flex items-center justify-center mb-24 relative">
            <div className="flex items-center gap-5 absolute left-0">
              <div className="w-48 h-14 p-2 bg-clr-bege-light border-3 border-clr-bege relative">
                <div className="w-full h-full bg-clr-bege-medium border-t-8 border-r-2 border-clr-bege-dark"></div>
                <div className="w-3/5 h-8 bg-clr-purple border-t-6 border-b-2 border-clr-purple-dark absolute top-2"></div>
                <div className="absolute -top-2 -left-2 -rotate-12">
                  <img
                    className="w-14 "
                    src="/img/logo.svg"
                    alt="Logo Driano.css"
                  ></img>
                </div>
              </div>
              <button>
                <img
                  className="w-14 transition-all hover:scale-110"
                  src="/img/contato.svg"
                ></img>
              </button>
              <button>
                <img
                  className="w-9 transition-all hover:scale-110"
                  src="/img/info.svg"
                ></img>
              </button>
            </div>
            <div className="text-center cursor-pointer transition-transform hover:scale-105">
              <img className="w-56" src="/img/title.svg"></img>
            </div>
            <div className="flex gap-7 absolute right-0">
              <button>
                <img
                  className="w-10 transition-all hover:scale-110"
                  src="/img/portifolio.png"
                  alt="prancheta"
                ></img>
              </button>
              <div className="flex flex-col gap-3 mt-5">
                <div className="w-44 h-8 pt-1 pl-6 bg-clr-bege-light border-3 border-clr-bege text-base text-clr-black flex items-center relative">
                  <img
                    className="w-10 absolute -left-5 -top-2"
                    src="/img/moeda.png"
                  ></img>
                  Adriano Melo
                </div>
                <div className="w-44 h-8 pt-1 pl-6 bg-clr-bege-light border-3 border-clr-bege text-base text-clr-black flex items-center relative">
                  <img
                    className="w-10 absolute -left-5 -top-2"
                    src="/img/donut.png"
                  ></img>
                  21 anos
                </div>
              </div>
            </div>
          </header>
          <div
            className="flex flex-1 justify-between items-start
          "
          >
            <aside className="flex flex-col gap-2 w-52 p-2 bg-clr-gray border-2 border-clr-gray-dark">
              <div className="w-full h-7 bg-clr-gray-medium border-2 border-clr-gray-light rounded-2xl relative">
                <div className="w-8 h-8 bg-clr-gray border-2 border-clr-gray-light rounded-full flex items-center justify-center absolute -left-1 -top-1">
                  <img className="w-6" src="/img/html.svg"></img>
                </div>
                <div>
                  <img
                    className="rounded-2xl w-full h-6"
                    src="/img/barra-html.png"
                  ></img>
                </div>
              </div>
              <div className="w-full h-7 bg-clr-gray-medium border-2 border-clr-gray-light rounded-2xl relative">
                <div className="w-8 h-8 bg-clr-gray border-2 border-clr-gray-light rounded-full flex items-center justify-center absolute -left-1 -top-1">
                  <img className="w-6" src="/img/css.svg"></img>
                </div>
                <div>
                  <img
                    className="rounded-2xl w-full h-6"
                    src="/img/barra-css.png"
                  ></img>
                </div>
              </div>
              <div className="w-full h-7 bg-clr-gray-medium border-2 border-clr-gray-light rounded-2xl relative">
                <div className="w-8 h-8 bg-clr-gray border-2 border-clr-gray-light rounded-full flex items-center justify-center absolute -left-1 -top-1">
                  <img className="w-6" src="/img/js.svg"></img>
                </div>
                <div>
                  <img
                    className="w-full h-6 rounded-2xl"
                    src="/img/barra-js.png"
                  ></img>
                </div>
              </div>
              <div className="w-full h-7 bg-clr-gray-medium border-2 border-clr-gray-light rounded-2xl relative">
                <div className="w-8 h-8 bg-clr-gray border-2 border-clr-gray-light rounded-full flex items-center justify-center absolute -left-1 -top-1">
                  <img className="w-6" src="/img/react.svg"></img>
                </div>
                <div>
                  <img
                    className="w-full h-6 rounded-2xl"
                    src="/img/barra-react.png"
                  ></img>
                </div>
              </div>
              <div className="w-full h-7 bg-clr-gray-medium border-2 border-clr-gray-light rounded-2xl relative">
                <div className="w-8 h-8 bg-clr-gray border-2 border-clr-gray-light rounded-full flex items-center justify-center absolute -left-1 -top-1">
                  <img className="w-6" src="/img/tailwind.svg"></img>
                </div>
                <div>
                  <img
                    className="w-full h-6 rounded-2xl"
                    src="/img/barra-tailwind.png"
                  ></img>
                </div>
              </div>
            </aside>
            <main className=""></main>
            <aside className="relative aside-r flex flex-col gap-2 w-52 p-2 pb-8 bg-clr-gray border-2 border-clr-gray-dark">
              <div className="flex flex-col gap-1">
                <div className="w-full h-8 py-1 px-2 rounded-xl flex items-center bg-clr-gray-2">
                  <img className="w-6 mr-2.5" src="/img/logo-ditin.png"></img>
                  <p className="text-zinc-50">DITIN</p>
                </div>
                <div className="w-full h-8 py-1 px-2 rounded-xl flex items-center bg-clr-gray-2">
                  <img className="w-6 mr-2.5" src="/img/logo-ditin.png"></img>
                  <p className="text-zinc-50">DITIN</p>
                </div>
                <div className="w-full h-8 py-1 px-2 rounded-xl flex items-center bg-clr-gray-2">
                  <img className="w-6 mr-2.5" src="/img/logo-ditin.png"></img>
                  <p className="text-zinc-50">DITIN</p>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <a href="github.com/drianomelo">
                  <img
                    className="w-9 transition-all hover:scale-110"
                    src="/img/github.svg"
                  ></img>
                </a>
                <a href="github.com/drianomelo">
                  <img
                    className="w-9 transition-all hover:scale-110"
                    src="/img/linkedin.svg"
                  ></img>
                </a>
                <a href="github.com/drianomelo">
                  <img
                    className="w-9 transition-all hover:scale-110"
                    src="/img/email.svg"
                  ></img>
                </a>
              </div>
              <div className="w-full h-36 bg-clr-gray-3 p-3 rounded-lg border-2 border-clr-gray-light shadow-2xl-inner-gray">
                <p className="text-zinc-300 text-xs text-justify">
                  Meu nome é Adriano Melo, tenho 21 anos, sou estudante de
                  Sistemas de Informação na Universidade Federal de Sergipe,
                  estagio na Diretoria de Tecnologia da Informação de São
                  Cristóvão.
                </p>
              </div>
              <button className="flex justify-center items-center w-20 h-10 rounded-md bg-gradient-to-t from-clr-orange-light to-clr-orange border-t-2 border-t-clr-yellow border-l-2 border-l-clr-orange-dark border-b-1 border-b-clr-orange-dark border-r-1 border-r-clr-yellow absolute -bottom-6 left-2/4 -translate-x-2/4 transition-all hover:scale-105">
                <img className="w-7" src="/img/logo.svg"></img>
              </button>
            </aside>
          </div>
          <footer className="flex gap-3 justify-center">
            <a
              className="rounded-full transition-all hover:scale-110 hover:shadow-yellow"
              href="#"
            >
              <img className="w-24" src="/img/modulo-about.svg"></img>
            </a>
            <a
              className="rounded-full transition-all hover:scale-110 hover:shadow-yellow"
              href="#"
            >
              <img className="w-24" src="/img/modulo-project.png"></img>
            </a>
            <a
              className="rounded-full transition-all hover:scale-110 hover:shadow-yellow"
              href="#"
            >
              <img className="w-24" src="/img/modulo-contact.svg"></img>
            </a>
            <a
              className="rounded-full transition-all hover:scale-110 hover:shadow-yellow"
              href="#"
            >
              <img className="w-24" src="/img/modulos.svg"></img>
            </a>
          </footer>
        </div>
      </div>
      <div className="footer">
        <p className="text-xxs text-clr-font-light">
          Desenvolvido por Driano.css <span className="mx-2">|</span> © Todos os
          direitos reservados <span className="mx-2">|</span>{" "}
          <a href="https://herozerogame.com">Hero Zero</a>
        </p>
      </div>
      <div
        id="modal-info"
        className="hidden flex flex-col items-center justify-center w-2/6 h-96 bg-clr-bege-light rounded-xl border-4 border-clr-bege fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50"
      >
        <div className="flex justify-center items-center w-2/3 h-16 bg-clr-green rounded-3xl rounded-tl-4xl rounded-tr-4xl border-t-3 border-t-clr-green-light border-b-3 border-b-clr-green-dark absolute -top-7">
          <p
            className="text-zinc-200 text-2xl
          "
          >
            Informacoes
          </p>
        </div>
        <div className="modal flex flex-col gap-3 text-clr-font font-semibold px-10">
          <p>
            Bem-vindo(a) ao meu portifólio, nele você encontrará informações
            sobre mim, além de poder ver meus projetos, contatos, skills e redes
            sociais. Ele foi todo inspirado nas artes do jogo{" "}
            <a
              className="text-blue-700 font-bold"
              href="https://herozerogame.com"
              target="_blank"
            >
              HERO ZERO
            </a>
            .
          </p>
          <p>
            Passe o mouse sobre todos os itens das páginas para mais informações
            e interações.
          </p>
          <p>
            No rodapé da página você pode escolher pela opção mais "Clean" do
            meu portifólio.
          </p>
        </div>
        <button className="text-zinc-50 flex justify-center items-center w-36 h-10 rounded-xl bg-gradient-to-t from-clr-orange-light to-clr-orange border-t-2 border-t-clr-yellow border-l-2 border-l-clr-orange-dark border-b-1 border-b-clr-orange-dark border-r-1 border-r-clr-yellow absolute -bottom-6 left-2/4 -translate-x-2/4 transition-all hover:scale-105">
          OK
        </button>
      </div>
    </div>
  );
}
