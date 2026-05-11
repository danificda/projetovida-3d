const botoens = document.querySelectorAll(".botao");
for (let i =0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        botoes[i].classlist.add("ativo")
    }
console.log(botoes);
}