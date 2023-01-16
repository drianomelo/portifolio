const title = document.querySelector("h1");

function typeWriter(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = "";

  textArray.forEach((letra, i) => {
    setTimeout(() => (element.innerHTML += letra), 75 * i);
  });
}

typeWriter(title);
