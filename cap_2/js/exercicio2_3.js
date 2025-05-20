const formulario = document.querySelector ("form");
const respProduto = document.querySelector("#promocao");
const respPromo = document.querySelector ("#valorPromo");

formulario.addEventListener ("submit", (e) =>{
    const produto = formulario.inProduto.value;
    const preco = Number(formulario.InPreco.value);

    const valorPromo = preco * 0.50;
    const valorFinal = valorPromo + (preco * 2);

    respProduto.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorFinal.toFixed(2)}`
    respPromo.innerText = `O 3º produto sai por apenas R$: ${valorPromo.toFixed(2)}`

    e.preventDefault();
})