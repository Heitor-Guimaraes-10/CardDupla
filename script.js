// Tema
document.getElementById("theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Card 1
const btnSobre1 = document.getElementById("btn-sobre1");
const btnHab1 = document.getElementById("btn-habilidades1");
const btnContato1 = document.getElementById("btn-contato1");

const sobre1 = document.getElementById("sobre1");
const skills1 = document.getElementById("skills1");
const contato1 = document.getElementById("contato1");

btnSobre1.addEventListener("click", () => {
  sobre1.classList.toggle("hidden");
  skills1.classList.add("hidden");
  contato1.classList.add("hidden");
});

btnHab1.addEventListener("click", () => {
  skills1.classList.toggle("hidden");
  sobre1.classList.add("hidden");
  contato1.classList.add("hidden");
});

btnContato1.addEventListener("click", () => {
  contato1.classList.toggle("hidden");
  sobre1.classList.add("hidden");
  skills1.classList.add("hidden");
});

// Card 2
const btnSobre2 = document.getElementById("btn-sobre");
const btnHab2 = document.getElementById("btn-habilidades");
const btnContato2 = document.getElementById("btn-contato");

const sobre2 = document.getElementById("sobre2");
const skills2 = document.getElementById("skills");
const contato2 = document.getElementById("contato2");

btnSobre2.addEventListener("click", () => {
  sobre2.classList.toggle("hidden");
  skills2.classList.add("hidden");
  contato2.classList.add("hidden");
});

btnHab2.addEventListener("click", () => {
  skills2.classList.toggle("hidden");
  sobre2.classList.add("hidden");
  contato2.classList.add("hidden");
});

btnContato2.addEventListener("click", () => {
  contato2.classList.toggle("hidden");
  sobre2.classList.add("hidden");
  skills2.classList.add("hidden");
});
