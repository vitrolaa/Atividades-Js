let precoGasolina, valorAbastecer, litrosAbastecios;
precoGasolina = 5.87;
valorAbastecer = parseFloat(prompt("digite o valor que você deseja abastecer:"));

litrosAbastecidos = valorAbastecer / precoGasolina;
alert("você conseguiu colocar " + litrosAbastecidos.toFixed(2) + " litros no tanque.");