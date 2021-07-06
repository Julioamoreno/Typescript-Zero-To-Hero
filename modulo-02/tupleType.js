"use strict";
let pessoa;
pessoa = ['Júlio Armando', 'Estagiário labluby', 28];
console.log(pessoa);
let listaFrutas = [
    'abacaxi',
    'laranja',
    'maça',
    'melancia',
    'morango',
];
console.log(listaFrutas);
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Júlio', 'Armando'], [28]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Júlio', 'Armando', 'Moreno'));
