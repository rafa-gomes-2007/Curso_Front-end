//Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");

const numberInput = document.querySelector("#number");

const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);

const multipicationTable = document.querySelector("#multiplication-operations");
//Funções
const createTable = (number, multiplicatorNumber) => {
  multipicationTable.innerHTML = "";

  for (i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `
    <div class ="row">
        <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div>
    </div>`;

    const parder = new DOMParser();

    const htmlTemplete = parder.parseFromString(template, "text/html");

    const row = htmlTemplete.querySelector(".row");

    multipicationTable.appendChild(row);
  }

  multiplicationTitle.innerText = number;
};

//Eventos
multiplicationForm.addEventListener("click", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});
