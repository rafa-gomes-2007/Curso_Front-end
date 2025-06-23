// // 1 - movendo-se pelo DOM
// console.log(document.body);

// console.log(document.body.childNodes[5]);
// console.log(document.body.childNodes[5].childNodes);
// console.log(document.body.childNodes[5].childNodes[1].textContent);

// // 2 - Selecionando por Tags
const listItens = document.getElementsByTagName("li");

// console.log(listItens);

// // 3 - Selecionando por Id

// const title = document.getElementById("titulo");

// console.log(title);

// // 4 - Selecionando por Classe

const produtos = document.getElementsByClassName("product");

console.log(produtos);

// // 5 - Selecionando os elementos por CSS

// const productsQuery = document.querySelectorAll(".product");

// console.log(productsQuery);

const mainContainer = document.querySelector("#main-conatainer");

// console.log(mainContainer);

// // 6 - InsertBefore

// const p = document.createElement("p");

// const header = title.parentElement;

// header.insertBefore(p, title);

// // 7 - AppendChild

// const navLinks = document.querySelector("nav ul");

// const li = document.createElement("li");

// navLinks.appendChild(li);

// // 8 - ReplaceChild

// const h2 = document.createElement("h2");

// h2.textContent = "Meu Novo Titulo!!!";

// header.replaceChild(h2, title);

// // 9 - TextNode

// const myText = document.createTextNode("Novo Texto");

// console.log(myText);

// const h3 = document.createElement("h3");

// h3.appendChild(myText);
// console.log(h3);

// mainContainer.appendChild(h3);

// // 10 - Trabalhando com Atributos

// const FirstLink = navLinks.querySelector("a");

// console.log(FirstLink);

// FirstLink.setAttribute("href", "https://www.google.com.br");

// console.log(FirstLink.getAttribute("href"));

// FirstLink.setAttribute("target", "_blank");

// // 11 - Altura e Largura

// const footer = document.querySelector("footer");

// console.log(footer.offsetWidth);
// console.log(footer.offsetHeight);

// console.log(footer.clientHeight);
// console.log(footer.clientWidth);

// 12 - Posição do ELemento

const product1 = produtos[0];

console.log(product1.getBoundingClientRect());

// 13 - CSS com JS
mainContainer.style.color = "blue";
mainContainer.style.backgroundColor = "#222";
mainContainer.style.paddingBottom = "82px";

// 14 - Alterando estilos de varios elementos

for (const li of listItens) {
  li.style.backgroundColor = "red";
}
