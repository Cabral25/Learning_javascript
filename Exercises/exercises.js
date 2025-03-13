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
    array.reduce((acumulador, elemento) => acumulador + elemento);
}