const numbers = [1, 2, 3, 4, 5, 8];

// filtro (filter)
//console.log(numbers.filter((n) => n > 4));
console.log(numbers.filter(n => n > 4));

// agregacoes -> acumula os valores (reduce)
// eh possivel passar um valor inicial
console.log(numbers.reduce((acum, current) => acum + current));

// eh possivel passar um valor inicial
console.log(numbers.reduce((acum, current) => acum + current, 10));

// pesquisar (find)
console.log(numbers.filter(n => n === 3));

let [a, b, c, d, e, f = 15] = numbers;
console.log(f);

// c2 recebe todo o resto
// pode ser em parametro de funcao tb
const [a2, b2, ...c2] = numbers;
console.log(c2);

const [a3, b3, , , c3] = numbers;
console.log(c3);

// se quiser inverter valor de variavel nao eh necessrio criar uma terceira
// basta fazer
console.log(a, b);
[b, a] = [a, b];
console.log(a, b);

const otherNumbers = [10, 20, 30, numbers];
console.log(otherNumbers);

// junta os arrays
const otherNumbers2 = [10, 20, 30, ...numbers, 30];
console.log(otherNumbers2);

/*
mais sobre colecoes no terminal do node

node
// -------------------------------------------------------------------------------------------------
// nova forma de colecao, respeita a unicidade do valor, nao permite valores duplicados
const s = new Set();

s.add(1).add(2).add(3).add(2);

s.has(2);
s.has(20);

s.delete(20);
s.delete(2);

s
// -------------------------------------------------------------------------------------------------
// map -> seta chave e valor

const m = new Map();

m.set('banana', 10);

// -------------------------------------------------------------------------------------------------


*/