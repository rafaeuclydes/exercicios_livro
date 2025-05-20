const formulario = document.querySelector("form");
const promocao = document.querySelector("#promocao");
const valorFinal = document.querySelector("#valorFinal");

formulario.addEventListener ("submit", (e) => {
    const medicamento = formulario.inMedicamento.value;
    const valor = Number(formulario.inPreco.value);

    const precoPromo = Math.floor(valor * 2);
    
    promocao.innerText = `Promoção de ${medicamento}`;
    valorFinal.innerText = `Leve 2 por apenas R$: ${precoPromo.toFixed(2)}`;

    e.preventDefault();
})