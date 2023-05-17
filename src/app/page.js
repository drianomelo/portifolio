export default function Home() {
  return (
    <div className="{grobold.className} h-screen bg-background-dark bg-cover flex  items-center flex-col">
      <div>
        <img
          className="w-64 m-2"
          src="/img/logo.png"
          alt="logo Driano.css"
        ></img>
      </div>
      <div className="w-3/5 h-3/4 bg-border-medium p-6 border-t-2 border-b border-x-2 border-border-light border-x-4 shadow-3xl relative bottom-7">
        <div className="w-full h-full bg-cenario bg-cover px-6 py-4 border-t-8 border-l-4 border-r-4 border-border-dark">
          <header className="flex items-center justify-center relative">
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
            <div className="text-center transition-transform hover:scale-105">
              <h2 className="text-zinc-100 text-2xl mb-1 ">
                driano.<span className="text-blue-400">css</span>
              </h2>
              <p className=" rounded-lg text-sm text-yellow-400 ">
                Desenvolvedor Front-end
              </p>
            </div>
            <div className="absolute right-0">
              <img
                className="w-10 transition-all hover:scale-110"
                src="/img/portifolio.png"
                alt="prancheta"
              ></img>
            </div>
          </header>
          <div>
            <aside></aside>
            <main></main>
            <aside></aside>
          </div>
          <footer></footer>
        </div>
      </div>
      <div></div>
    </div>
  );
}
