
const botoesCarrossel= document.querySelectorAll(".botao");
 const imagens = document.querySelectorAll(".imagem");
 const informacoes = document.querySelectorAll(".informacoes");
//passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao,indice) => {
  botao.addEventListener("click",() => {
   // passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();
//passo 4 - marcar o botão clicado como se estivesse selecionado
    marcarBotaoSelecionado(botao);
//passo 5 - esconder a imagem anteriormente selecionada
  esconderImagemativa();

  mostrarimagemdeFundo(indice);
 
  esconderInformacoesAtivas();
  mostrarInformacoes(indice);
});
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    if (informacoesAtiva) {
        informacoesAtiva.classList.remove("ativa");
    }  
}

function mostrarimagemdeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemativa() {
    const imagemAtiva = document.querySelector(".imagem.ativa");
    if (imagemAtiva) {
        imagemAtiva.classList.remove("ativa");
    }
}

function   desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    if(botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}
