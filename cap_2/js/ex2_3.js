const formulario = document.querySelector("form");
const promoCarro = document.querySelector("#promo");
const entradaCarro = document.querySelector("#entrada");
const parcelas = document.querySelector("#parcelas")

formulario.addEventListener ("submit", (e) => {
    const modeloCarro = formulario.carro.value;
    const valorCarro = Number(formulario.preco.value);

    const entrada = valorCarro * 0.50; //calcula o valor da entrada
    const parcela = (valorCarro * 0.50)/12 //valor das parcelas

    promoCarro.innerText = `Promoção: ${modeloCarro}`
    entradaCarro.innerText = `Valor da entrada ${entrada.toFixed(2)}`
    parcelas.innerText = `Valor das parcelas 12x de ${parcela.toFixed(2)}`

    e.preventDefault();
})