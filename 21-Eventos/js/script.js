// 1 - Adicionando Eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou neu");
});

// 2 - Removendo Evento

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Tem Evento");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento Removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - Argumento do Evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - Propagação de Eventos
const containerBtn = document.querySelector("#btn-container");
const btnInsiderContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsiderContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - Removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não mudou a pagina");
});

// 6 - Eventos de tecla

document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Apertou a tecla ${e.key}`);
});

// 7 - Eventos do Mouse
const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", () => {
  console.log("Apertou o botão");
});

mouse.addEventListener("mouseup", () => {
  console.log("Soltou o botão");
});

mouse.addEventListener("dblclick", () => {
  console.log("Apertou o botão 2x");
});

// 8 - Movimentação do mouse
document.addEventListener("mousemove", (e) => {
  // console.log(`Eixo X: ${e.x}`);
  // console.log(`Eixo Y: ${e.y}`);
});

// 9 Eventos por Scroll
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("Passamos de 200pxxxs");
  }
});

window.addEventListener("scroll", (e) => {
  if (window.pageXOffset < 200) {
    console.log("Passamos de 200pxxxs");
  }
});

// 10 - Eventos de focus/blur
const input = document.querySelector("input");

input.addEventListener("focus", (e) => {
  console.log("Esta no Input");
});

input.addEventListener("blur", (e) => {
  console.log("Não esta mais no input");
});

// 11 - Eventos de loading
window.addEventListener("load", (e) => {
  console.log("A pagina carregou");
});

// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   e.returnValue = "Não";
// });

// 12 - Debounce
const deebounce = (f, delay) => {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timneout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  deebounce(() => {
    console.log("Executando a cada 1 segundo");
  }, 1000)
);
