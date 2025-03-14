// EXERCISES

function isEven(number){
    return number % 2 === 0;
}

result = isEven(2);
console.log(result);

const ePar = (numero) => {
    console.log(numero % 2 === 0);
}

ePar(3); // false

function contaString(string){
    return `Essa string tem ${string.length} letras`;
}

nString = contaString('cabral');
console.log(nString); // Essa string tem 6 letras

const maiorNumero = (n1, n2) => {
    funcao = Math.max;
    const maior = funcao(n1, n2);
    return maior;
}

const maior = maiorNumero(5, 7);
console.log(maior); // 7


function stringInvertida(string){
    return string.split('').reverse().join('');
}

console.log(stringInvertida('cabral')); // larbac
nome = 'cabral';
let arrayLetras = nome.split(''); // ['c','a', 'b', 'r', 'a', 'l]
let arrayInvertido = arrayLetras.reverse(); // ['l', 'a', 'r', 'b', 'a', 'c']
let nomeInvertido = arrayInvertido.join(''); // larbac
console.log(nomeInvertido);


function contemLetra(letra, palavra){
    if(palavra.includes(letra)){
        console.log(`A palavra ${palavra} contém a letra ${letra}`);
    }
    else{
        console.log(`A palavra ${palavra} não contém a letra ${letra}`);
    }
}

contemLetra('p', 'cabana'); // A palavra cabana não contém a letra p


function contagemRegressiva(n){

    for(let i = n; i >= 0; i--){
        console.log(i);
    }
}

contagemRegressiva(10);

function somaArray(array){
    const res = array.reduce((acumulador, elemento) => acumulador + elemento);
    return res;
}

function maiorNumeroArray(array){
    return Math.max(...array); // spread operator pra desempacotar os elementos do array
}

function inverteArray(array){
    return array.slice().reverse();
}

function filtraPares(array){
    const pares = array.filter((number) => number % 2 === 0);
    return pares; // certo
}

function removeRepetidos(array){
    return [...new Set(array)];
}

const lista = [6, 9, 8, 5, 5];
soma = somaArray(lista);
console.log(soma);

x = removeRepetidos(lista);
console.log(x);



function multiplicaArray(array, numero){
    resultado = array.map((numero_) => numero_ * numero);
    return resultado; // certo
}

function encontraElemento(array, valor){
    if(array.includes(valor)){
        return true;
    }
    else{
        return false; // certo
    }
}

function concatenaArrays(array1, array2){
    return [...array1, ...array2]; // certo
}

function vezesPresente(array, valor){
    let vezesPresente = 0;
    for(let number of array){
        if(valor === number){
            vezesPresente++;
        }
    }
    return vezesPresente; // certo
}

function removeValor(array, valor){
    return array.filter(elemento => elemento !== valor);
}

const array_ = [5, 6, 7, 5];
const arrayMultiplicado = multiplicaArray(array_, 2);
console.log(arrayMultiplicado);

const elementoEncontrado = encontraElemento(array_, 8);
console.log(elementoEncontrado);

const novoArray = [8, 9];
const arraysJuntos = concatenaArrays(array_, novoArray);
console.log(arraysJuntos);

let vezesEncontrado = vezesPresente(array_, 5);
console.log(vezesEncontrado);

const valorRemovido = removeValor(array_, 7);
console.log(valorRemovido);



function exibePessoa(objeto){
    console.log(`Nome: ${objeto.nome}`);
    console.log(`Idade: ${objeto.idade}`);
    console.log(`Cidade: ${objeto.cidade}`);
}

const pessoa1 = {
    nome: 'Otto Cabral',
    idade: 25,
    cidade: 'Manaus'
}

exibePessoa(pessoa1);


const carro = {
    marca: 'BYD',
    modelo: 'Dolphin'
}

carro.ano = 2025;


function exibeChaves(objeto){
    console.log(Object.keys(objeto));
}

function verificaPropriedade(objeto, propriedade){
    return objeto.hasOwnProperty(propriedade);
}

function converteEmArray(objeto){
    return Object.entries(objeto);
}

exibeChaves(carro);

const property = verificaPropriedade(carro, 'marca');
console.log(property);

const emArray = converteEmArray(carro);
console.log(emArray);

// minha solução

const meuParagrafo = document.getElementById('meuParagrafo');
const meuBotao = document.getElementById('meuBotao');

meuBotao.addEventListener('click', event => {
    meuParagrafo.textContent = 'Texto alterado!';
})

// solução chat gpt 

//document.addEventListener("DOMContentLoaded", () => {
//    const meuParagrafo = document.getElementById('meuParagrafo');
//    const meuBotao = document.getElementById('meuBotao');

//    meuBotao.addEventListener('click', () => {
//        meuParagrafo.textContent = 'Texto alterado!';
//    });
//});

// solução chat gpt

const myButton = document.getElementById('myButton');

function gerarCorAleatoria(){
    
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(){
    myButton.addEventListener('click',
        () => {
            document.body.style.backgroundColor = gerarCorAleatoria();
        }
    )
    
}
let contador = 0;
const paragrafo = document.createElement('p');

document.addEventListener('keydown', event => {

    contador++;

    paragrafo.textContent = `vezes clicadas: ${contador}`;

    document.body.append(paragrafo);

    
})

document.addEventListener()