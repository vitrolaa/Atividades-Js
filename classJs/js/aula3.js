var time1, time2, golT1, golT2;

time1 = prompt("Digite o time da casa:");
time2 = prompt("Digite o time visitande:");
golT1 = parseFloat(prompt("Quantos gols o " + time1 + " fez:"));
golT2 = parseFloat(prompt("Quantos gols o " + time2 + " fez:"));

if (golT1 > golT2) {
    alert("O vencedor foi o " + time1);
} if(golT1==golT2){
    alert("O jogo empatou")
}else{
    alert("O ganhador foi o " + time2);
}