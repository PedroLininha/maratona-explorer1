const respostaElement = document.querySelector("#resposta")
const inputPergunta = document.querySelector ("#InputPergunta")
const BotaoPerguntar = document.querySelector ("#BotaoPerguntar")
const resposta=[ 
 "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem duvidas!",
  "Pergunte novamente mais tarde",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Quem sabe. ",
  "Voce pode contar com isso.",
  "Melhor nao-lhe te dizer por agora.", 
  " A meu ver sim.",
  "Minhas fontes dizem que sim. ",
  "Minhas fontes dizem que não. ",
  "Provavelmente.",
  "Não e possível prever por agora.",
  "Perspectiva boa.",
  "As perspectiva não são tão boas. ",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Creio que sim.",
]


//Clicar em fazer pergunta
function fazerPergunta() {
if(inputPergunta.value == ""){
alert("Digite sua pergunta") 
return
}

BotaoPerguntar.setAttribute('disabled',true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

const totalResposta = resposta.length
const numeroAleatorio= Math.floor(Math.random() * totalResposta)


console.log(resposta[numeroAleatorio])
respostaElement.innerHTML= pergunta + resposta[numeroAleatorio]
respostaElement.style.opacity= 1;

setTimeout(function () {
respostaElement.style.opacity= 0; 
BotaoPerguntar.removeAttribute('disabled')

}, 4000)
}
 
