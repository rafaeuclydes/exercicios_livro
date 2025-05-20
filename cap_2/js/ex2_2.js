const formulario = document.querySelector("form");
const respFilme = document.querySelector("h3");
const respDuracao = document.querySelector("h4");

formulario.addEventListener ("submit", (e) => {
    const titulo = formulario.filme.value;
    const duracao = Number(formulario.duracao.value);

    const horas = Math.floor(duracao/60); //arredonda para baixo o resultado
    const minutos = duracao % 60; //obtem o resto da divisão

    respFilme.innerText = titulo;
    respDuracao.innerText = `O filme tem duração de ${horas} horas e ${minutos} minutos`;

    e.preventDefault(); //evita que as informações do formulário sejam apagadas ao enviar
})