let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let trys = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag,texto);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();
console.log(numeroSecreto);
function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        let palavraTry = trys <= 1 ? "tentativa" : "tentativas";
        let mensagemtrys = `você descobriu o número secreto com ${trys} ${palavraTry}!`;
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", mensagemtrys);
    document.getElementById("reiniciar").removeAttribute("disabled");
    } else
    if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é menor");
    }else{
        exibirTextoNaTela("p", "O número secreto é maior");
    }
    trys++
    LimparCampo();
    }
function gerarNumeroAleatorio() {
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}
function LimparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    trys = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
