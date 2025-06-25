const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeinput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

//Eventos

//Gerar QrCode
function generateQrCode() {
  const qrCodeInpuValue = qrCodeinput.value;

  if (!qrCodeInpuValue) return;

  qrCodeBtn.innerHTML = "Aguarde...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInpuValue} `;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerHTML = "Código Criado!!!";
  });
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeinput.addEventListener("keydown", () => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

//Limpar Area do QrCode

qrCodeinput.addEventListener("keyup", () => {
  if (!qrCodeinput.value) {
    container.classList.remove("active");
    qrCodeBtn.InnerText = "Gerar QrCode";
  }
});
