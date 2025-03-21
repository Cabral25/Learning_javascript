
let nome = 'Sherlock';

console.log(nome[1]); // h

console.log(nome.charAt(0)); // S
console.log(nome.charAt(nome.length - 1)); // k

console.log(nome.indexOf('e')); // 2

console.log(nome.lastIndexOf('o')); // 5

console.log(nome.length); // 8

console.log(nome.toUpperCase()); // SHERLOCK
console.log(nome.toLowerCase()); // sherlock

console.log(nome.at(-1)); // k
console.log(nome.at(-2)); // c

console.log(nome.concat(' Holmes')); // Sherlock Holmes

console.log(nome.startsWith('S')); // true
console.log(nome.endsWith('k')); // true

console.log(nome.includes('h')); // true

console.log(nome.replace('S', 'C')); // Cherlock


const nome2 = 'Mario Bros';

console.log(nome2.replace('o', 'a')); // Maria Bros
console.log(nome2.replaceAll('o', 'a')); // Maria Bras

console.log(nome2.split('')); // ['M', 'a', 'r', 'i', 'o', ' ', 'B', 'r', 'o', 's']
console.log(nome2.split(' ')); // ['Mario', 'Bros']

console.log(nome2.slice(2, 7)); // rio B -> do index 2 ao 7 sem contar o 7
console.log(nome2.slice(1)); // ario Bros -> do 1 até o final
console.log(nome2.slice(nome2.length - 4, nome2.length)); // Bros
console.log(nome2.slice(6)); // Bros

console.log('   teste   '.trim()); // teste

const frutas = ['jaca', 'kiwi', 'pera'];
console.log(frutas.join(', ')); // jaca, kiwi, pera

console.log(nome.repeat(3)); // SherlockSherlockSherlock

console.log(nome.padStart(10, '>')); // >>Sherlock -> preenche o início da string com > até que string.length == 10
console.log(nome2.padStart(13, '!')); // !!!Mario Bros

console.log(nome.padEnd(11, '<')); // Sherlock<<<
console.log(nome2.padEnd(13, '!')); // Mario Bros!!!

const numero = 123;
console.log(String(numero)); // '123'
console.log(numero.toString()); // '123'


//-------------------Exercícios-------------------------



function inverteString(string){

    const listaString = string.split('');
    const listaInvertida = listaString.reverse()

    return listaInvertida.join('');
}

console.log(inverteString('cabral')); // larbac


function contaVogais(string){

    const listaVogais = ['a', 'e', 'i', 'o', 'u'];
    let totalVogais = 0;

    for(let char of string.toLowerCase()){
        if(listaVogais.includes(char)){
            totalVogais++;
        }
    }

    return `Essa string tem um total ${totalVogais} vogais`;
}

console.log(contaVogais('calabresa')); // Essa string tem um total 4 vogais


function criarAcronimo(frase){

    const listaPalavras = frase.split(' ');
    let acronimo = '';

    for(let palavra of listaPalavras){
        acronimo += palavra.charAt(0);
    }

    return acronimo;
}

console.log(criarAcronimo("Central Intelligence Agency")); // CIA


function verificarPalindromo(palavra){

    const listaLetras = palavra.split('');
    const listaLetrasInvertido = listaLetras.reverse();

    return palavra == listaLetrasInvertido.join('');
}

console.log(verificarPalindromo('arara')); // true
console.log(verificarPalindromo('ovos')); // false


const frase = 'Eu amo JavaScript';
console.log(frase.replaceAll(' ', '-')); // Eu-amo-JavaScript


function substituiLetra(palavra, letraAntiga, letraNova){

    return palavra.replaceAll(letraAntiga, letraNova);
}

console.log(substituiLetra('banana', 'a', 'o')); // bonono


function repeteString(string, n){

    return string.repeat(n);
}

console.log(repeteString('JS', 3)); // JSJSJS


function verificaPrefixoSufixo(palavra, prefixo, sufixo){

    return palavra.startsWith(prefixo) && palavra.endsWith(sufixo);
}

console.log(verificaPrefixoSufixo('programação', 'pro', 'ção')); // true
console.log(verificaPrefixoSufixo("desenvolvimento", "pro", "ção")); // false


function removeCaracteresEspeciais(frase){

    const caracteresEspeciais = ['.', ',', '!', '?'];
    let fraseLimpa = '';

    for(let char of frase){
        if(!caracteresEspeciais.includes(char)){
            fraseLimpa += char;
        }
    }

    return fraseLimpa;
}

console.log(removeCaracteresEspeciais("Olá, mundo! Como vai?")); // Olá mundo Como vai