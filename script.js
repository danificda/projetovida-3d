const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i =0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        for(let j=0; j<botoes.length; j++){ 
           botoes[j].classlist.remove("ativo");
           textos[j].classlist.remove("ativo");
        }
        botoes[i].classlist.add("ativo")
        textos[i].classlist.add("ativo")
    }
console.log(botoes);
} 
const contadores = document.querySelectorAll("contador");
const tempoObjetivo1 = new Date("2026-12-28T23:59:59");