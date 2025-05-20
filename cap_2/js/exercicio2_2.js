const formulario = document.querySelector("form");
const resposta = document.querySelector("h3");

formulario.addEventListener ("submit", (e) => {
    const valorPorUso = Number(formulario.valorPorUso.value);
    const TempoDeUso = Number(formulario.tempoDeUso.value);

    const bloco = Math.ceil(TempoDeUso / 15)
    const valorFinal = bloco * valorPorUso;

    resposta.innerText = `Valor a pagar R$: ${valorFinal.toFixed(2)}`;

    e.preventDefault();
})