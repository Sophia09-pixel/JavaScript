const btnGerarDados = document.getElementById("btnDados");

btnGerarDados.addEventListener("click", () => {
    const viagens = document.querySelectorAll(".viagem");

    let maiorTempo = 0;
    let maiorMediaPreco = 0;
    let menorValorPorHora = Infinity; 
    let indiceMaiorTempo = 0;
    let indiceMaiorMediaPreco = 0;
    let indiceMenorValorPorHora = 0; 
    viagens.forEach((viagem, index) => {
        const mediaPreco = Number(viagem.querySelector('.media-preco').textContent);
        const duracaoText = viagem.querySelector('.duracao').textContent;
        
        const [horas, minutos] = duracaoText.split(':');
        const duracao = (Number(horas) * 60) + Number(minutos);

        if (duracao > maiorTempo) {
            maiorTempo = duracao;
            indiceMaiorTempo = index;
        }

        if (mediaPreco > maiorMediaPreco) {
            maiorMediaPreco = mediaPreco;
            indiceMaiorMediaPreco = index;
        }

        if (duracao > 0) {
            const valorPorHora = mediaPreco / (duracao / 60); 

            const valorPorHoraHtml = viagem.querySelector('.valor-hora');
            valorPorHoraHtml.textContent = valorPorHora.toFixed(2); 

            
            if (valorPorHora < menorValorPorHora) {
                menorValorPorHora = valorPorHora;
                indiceMenorValorPorHora = index; 
            }
        }
    });

    viagens.forEach((viagem) => {
        viagem.classList.remove("bg-danger", "bg-warning");
    });
    
    const viagemMaiorTempo = viagens[indiceMaiorTempo];
    viagemMaiorTempo.classList.add("bg-danger");

    const viagemMaiorMediaPreco = viagens[indiceMaiorMediaPreco];
    viagemMaiorMediaPreco.classList.add("bg-warning");

    const destinoMaiorValor = viagens[indiceMaiorMediaPreco].querySelector('.destino').textContent;
    const destinoMenorValor = viagens[indiceMenorValorPorHora].querySelector('.destino').textContent; 

    document.getElementById("maiorValor").textContent = destinoMaiorValor;
    document.getElementById("menorValor").textContent = destinoMenorValor;
});