
// Seleciona elementos
const btnSkills1 = document.getElementById("btn-skills1");
const btnContato1 = document.getElementById("btn-contato1");
const btnSkills = document.getElementById("btn-skills");
const btnContato = document.getElementById("btn-contato");

const skills1 = document.getElementById("skills1");
const contato1 = document.getElementById("contato1");
const skills = document.getElementById("skills");
const contato = document.getElementById("contato");

// Evento botão skills
btnSkills1.addEventListener("click", function () {
    skills1.classList.toggle("hidden");
    contato1.classList.add("hidden");
});

// Evento botão contato
btnContato1.addEventListener("click", function () {
    contato1.classList.toggle("hidden");
    skills1.classList.add("hidden"); // fecha skills se estiver aberto
});

btnSkills.addEventListener("click", function () {
    skills.classList.toggle("hidden");
    contato.classList.add("hidden");
});

btnContato.addEventListener("click", function () {
    contato.classList.toggle("hidden");
    skills.classList.add("hidden"); // fecha skills se estiver aberto
});