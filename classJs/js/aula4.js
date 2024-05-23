var idade;

idade = prompt("Digite sua idade: ")

if (idade >= 5 && idade <= 7) {
    alert("Você é infantil A")
}else
if (idade >= 8 && idade <= 10) {
    alert("Você é infantil B")
}else
if (idade >= 11 && idade <= 13) {
    alert("Você é juvenil A")
}else
if (idade >= 14 && idade <= 17) {
    alert("Você é juvenil B")
}else
if (idade >= 18) {
    alert("você é adulto")
} else {
    alert("Essa idade não tem categoria")
}