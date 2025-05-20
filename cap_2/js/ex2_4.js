const formulario = document.querySelector ("form");
const respPagar = document.querySelector("#pagar");

formulario.addEventListener ("submit", (e) => {
    const peso = Number(formulario.quilo.value);
    const consumo = Number(formulario.consumo.value);

    const totalPagar = (peso / 1000) * consumo;

    respPagar.innerText = `Valor a pagar R$: ${totalPagar.toFixed(2)}`;

    e.preventDefault();
})