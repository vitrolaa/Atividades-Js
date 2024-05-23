let nota1, nota2, media, nome;
nome= prompt("Digite o seu nome completo: ");
nota1= parseFloat(prompt("Digite a sua primeira nota:"));
nota2= parseFloat(prompt("DIgite a sua segunda nota:"));

media= (nota1 + nota2) /2;

if(media < 7.0){
    alert("Aluno(a)  " + nome + "\n Sua Primeira nota foi: " + nota1 + " \n Sua segunda nota foi: " + nota2  + "\n E sua media final foi de: " + media.toFixed(1) + "\n \n Você rodou de ano!" );

}else{

alert( "Aluno(a)  " + nome + "\n Sua Primeira nota foi: " + nota1 + " \n Sua segunda nota foi: " + nota2  + "\n E sua media final foi de: " + media.toFixed(1) + "\n \nVoce passou de ano!");

}
document.onload = function imageOption() {
    document.getElementById("imageoption").src = "images/hyperx-option.png"; }  