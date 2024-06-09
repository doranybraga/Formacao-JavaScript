
/*
Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis, sendo elas:
1- Preço do combustivel;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;
Imprima no console o valor que será gasto de combustive para realizar esta viagem.
*/

console.log('Olá!');

//entradas
const precoCombustivel = 5.79;
const KmPorLitros = 10;
const distanciaKm = 100;

//Lógica
const LitrosConsumidos = distanciaKm/KmPorLitros;
const valorGasto = LitrosConsumidos * precoCombustivel;

console.log('O valor gasto de combustivel na viagem será de:')
console.log(valorGasto)