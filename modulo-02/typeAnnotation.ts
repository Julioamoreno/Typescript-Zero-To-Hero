let nome: string = 'Júlio Armando';
console.log(nome);

let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

let carro: {
	nome: string;
	ano: number;
	preco: number;
};

carro = { nome: 'Vectra', ano: 2010, preco: 35.0 };
console.log(carro);

function multiplicar(num1: number, num2: number) {
	return num1 * num2;
}

console.log(multiplicar(3, 5));
