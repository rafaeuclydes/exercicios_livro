const form = document.querySelector ('form');
const resposta = document.querySelector ('h3');

form.addEventListener ("submit", (e) => {
    e.preventDefault();

    const nome = form.inName.value;
    const feminino = form.inFeminino.checked;
    const altura = Number(form.inAltura.value);

    let peso;

    if (feminino) {
        peso = 22 * Math.pow (altura, 2);
    } else {
        peso = 21 * Math.pow (altura, 2);
    }

    resposta.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)}`;
})

form.addEventListener ('reset', () => {
    resposta.innerText = '';
})