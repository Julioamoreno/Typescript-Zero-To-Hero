let pessoa: [string, string, number];
pessoa = ['Júlio Armando', 'Estagiário labluby', 28];

console.log(pessoa);

let listaFrutas: [string, ...string[]] = [
	'abacaxi',
	'laranja',
	'maça',
	'melancia',
	'morango',
];
console.log(listaFrutas);

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];

console.log(listaFrutas2);

function listarPessoas(nomes: string[], idades: number[]) {
	return [...nomes, ...idades];
}

let resultado = listarPessoas(['Júlio', 'Armando'], [28]);
console.log(resultado);

type Nome =
	| [primeiroNome: string, sobrenome: string]
	| [primeiroNome: string, nomeDoMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
	return [...nome];
}

console.log(criarPessoa('Júlio', 'Armando', 'Moreno'));
