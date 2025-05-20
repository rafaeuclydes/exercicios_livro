const formulario = document.querySelector("form");
const resposta = document.querySelector("h3");

formulario.addEventListener("submit", (e) => {
    const nome = formulario.inNome.value;
    resposta.innerText = `Olá ${nome}`;
    e.preventDefault();
})