
const numeros = [1, 2, 3, 4, 5];
const frutas = ['maçã', 'banana', 'uva', 'banana'];
const misto = [42, 'oi', true, {nome: 'maria'}, [1, 2, 3]];

console.log(numeros[4]); // 5
console.log(numeros[numeros.length - 1]); // 5 - último elemento

console.log(misto[3].nome); // maria
console.log(misto[4][0]); // 1

console.log(frutas.indexOf('banana')); // 1
console.log(frutas.indexOf('melancia')); // -1
console.log(frutas.at(1)); // banana -> retorna o item no index especificado se existir, senão 'undefined'
console.log(frutas.includes('maçã')); // true
console.log(frutas.lastIndexOf('banana')); // 3
console.log(frutas.reverse()); // ['banana', 'uva', 'banana', 'maçã'] -> inverte a ordem dos elementos
console.log(frutas.toLocaleString()); // banana,uva,banana,maçã -> retorna os elementos do array convertidos pra string

numeros[5] = 6; // inserindo um novo elemento no array
console.log(numeros); // [1, 2, 3, 4, 5, 6]

numeros.push(7); // insere 7 no fim do array e retorna o novo tamanho do array
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]

const ultimo = numeros.pop(); // remove e retorna o último elemento
console.log(numeros,'->', ultimo); // [1, 2, 3, 4, 5, 6] '->' 7

const tamanhoNovo = numeros.unshift(0); // insere no início da string e retorna o novo tamanho do array
console.log(numeros, `Novo tamanho: ${tamanhoNovo}`); // [0, 1, 2, 3, 4, 5, 6] 'Novo tamanho: 7'

const primeiroElemento = numeros.shift(); // remove e retorna o primeiro elemento
console.log(numeros, `Elemento removido: ${primeiroElemento}`); // [1, 2, 3, 4, 5, 6] 'Elemento removido: 0'

const numerosRemovidos = numeros.splice(1, 2); // remove e retorna 2 elementos a partir do índice 1
console.log(numeros, `Números removidos: ${numerosRemovidos}`); // [1, 4, 5, 6] 'Números removidos: 2,3'

const novoArray = numeros.slice(1, 3); // retorna uma cópia em forma de array; a partir do índice 1, retorna 2 elementos
console.log(novoArray); // [4, 5]



const praString = numeros.map(num => String(num));
console.log(praString); // ['1', '4', '5', '6']

const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 8, 10, 12]


const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); // [4, 6]

const menoresPalavras = frutas.filter(fruta => fruta.length <= 4);
console.log(menoresPalavras); // ['uva', 'maçã']

const frutasComM = frutas.filter(fruta => fruta.startsWith('m'));
console.log(frutasComM); // ['maçã']

const arraySomado = numeros.reduce((acumulador, numero) => acumulador + numero);
console.log(arraySomado); // 16

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
// banana
// uva
// banana
// maçã

for(let fruta of frutas){

    if(fruta.startsWith('b')){
        console.log(`${fruta} começa com b`);
    }
    else{
        console.log(`${fruta} não começa com b`);
    }
    
}

const comecaComB = [];
const naoComecaComB = [];

for(let fruta of frutas){

    if(fruta.startsWith('b')){
        comecaComB.push(fruta);
    }
    else{
        naoComecaComB.push(fruta);
    }
}

console.log(comecaComB); // ['banana', 'banana']
console.log(naoComecaComB); // ['uva', 'maçã']

const objetoArray = misto[3];
console.log(typeof objetoArray); // object


frutas.forEach(fruta => {
    console.log(fruta);
})


function squareRoot(value, index, array){

    array[index] = Math.sqrt(value).toFixed(2);
}

function exibir(element){
    console.log(element);
}

numeros.forEach(squareRoot);
numeros.forEach(exibir);

console.log(numeros);

frutas.forEach(value => {
    console.log(value + ' -> ' + value);
    console.log(value.repeat(3)); // bananabananabanana / uvauvauva / maçãmaçãmaçã
})

frutas.sort();
console.log(frutas); // ['banana', 'banana', 'maçã', 'uva']

console.log(frutas.join(' -> ')); // Adds all the elements of an array into a string, separated by the specified separator string.
// banana -> banana -> maçã -> uva

const texto = 'melão, abacate, morango';
const arrayFrutas = texto.split(', '); // Split a string into substrings using the specified separator and return them as an array.
console.log(arrayFrutas); // ['melão', 'abacate', 'morango']



// -------------------Exercícios---------------------------


function somaElementos(array){

    let total = array.reduce((acumulador, numero) => acumulador + numero);
    return total;
}

const newArray = [2, 4, 6];
const resultado = somaElementos(newArray);
console.log(resultado);


function contaElementos(array, elemento){

    let vezesEmArray = 0;
    for(let number of array){
        if(number === elemento){
            vezesEmArray++;
        }
    }
    return `O elemento ${elemento} aparece ${vezesEmArray} vezes no array`;
}

const resultadoContaElementos = contaElementos(frutas, 'banana');
console.log(resultadoContaElementos); // O elemento banana aparece 2 vezes no array


function maiorValor(array){

    let maiorValor = Math.max(...array);
    return maiorValor;
}


function espelharMatriz(matriz){

    const matrizEspelhada = [];

    for(let array of matriz){
        let copia = [...array]; // reverse modifica o array original, por isso a cópia
        matrizEspelhada.push(copia.reverse());
    }

    return matrizEspelhada;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(espelharMatriz(matriz));
// [3, 2, 1]
// [6, 5, 4]
// [9, 8, 7]


function removeDuplicatas(array){

    const arraySemRepetidos = [];

    for(let number of array){
        if(!arraySemRepetidos.includes(number)){
            arraySemRepetidos.push(number);
        }
    }
    return arraySemRepetidos; // ou new Set(array)
}

const arrayRepetido = [1, 2, 3, 2, 4, 3, 5, 1];
console.log(removeDuplicatas(arrayRepetido)); // [1, 2, 3, 4, 5]


function pegarNomes(arrayObjeto){

    const nomes = [];

    arrayObjeto.forEach(objeto => {
        nomes.push(objeto.nome);
    })

    return nomes;
}

const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 }
];

console.log(pegarNomes(pessoas)); // ['João', 'Maria', 'Pedro']


// ------------------chatgpt---------------------------


//usando o Algoritmo de Kadane

function maiorSomaSubarray(array){

    let maiorAtual = array[0];
    let maiorGlobal = array[0];

    for(let i = 1; i < array.length; i++) {
        maiorAtual = Math.max(array[i], maiorAtual + array[i]);
        maiorGlobal = Math.max(maiorGlobal, maiorAtual);
    }

    return maiorGlobal;
}

console.log(maiorSomaSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6


function maisFrequente(array){

    const contagem = {};
    let elementoMaisFrequente = array[0];
    let maxContagem = 0;

    for (let number of array){
        contagem[number] = (contagem[number] || 0) + 1;

        if(contagem[number] > maxContagem){
            maxContagem = contagem[number];
            elementoMaisFrequente = number;
        }
    }

    return elementoMaisFrequente;
}

console.log(maisFrequente([1, 3, 3, 7, 3, 2, 4, 2, 2, 2, 2])); // 2