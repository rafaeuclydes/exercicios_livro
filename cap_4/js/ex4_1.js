const formulario = document.querySelector('form');
const resp1 = document.querySelector ('h3');
const resp2 = document.querySelector ('h4');

formulario.addEventListener ('submit', (e) => {
    e.preventDefault();
    const nome = formulario.inName.value;
    const primNota = Number(formulario.inNota1.value);
    const segNota = Number(formulario.inNota2.value);
    const media = (primNota + segNota) / 2

    resp1.innerText = `Média das notas ${media.toFixed(2)}`;

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}, você foi aprovado!`
        resp2.style.color = 'green'
    } else if (media >= 5) {
        resp2.innerText = `Atenção ${nome}, você esta em exame.`
        resp2.style.color = 'blue';
    } else {
        resp2.innerText = `Ops ${nome}... Você reprovou.`;
        resp2.style.color = 'red';
    }
})