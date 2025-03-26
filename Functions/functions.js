
function somar(a, b){
    return a + b;
}

console.log(somar(2, 2)); // 4

function somarRestParameters(...numbers){
    return numbers.reduce((acumulador, number) => acumulador + number, 0);
}

console.log(somarRestParameters(7, 8, 5)); // 20


const functionExpression = function(...strings){
    return strings.join(' ');
}

console.log(functionExpression('otto', 'cabral')); // otto cabral

const funcaoAnonima = function(array1, arra2){ // function expression
    console.log([...array1, ...arra2]);
}

funcaoAnonima([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

const contagemRegressiva = () => { // arrow functions
    for(let i = 10; i > 0; i--){
        console.log(i);
    }
}

// setTimeout(() => contagemRegressiva(), 3000)

const powN = (n1, n2) => {
    return Math.pow(n1, n2);
}

console.log(powN(2, 3)); // 8

const dobro = (x) => x * 2;
console.log(dobro(5)); // 10


function saudar(nome = 'Visitante'){ // parâmetro opcional
    return `olá, ${nome}`;
}

console.log(saudar('otto')); // olá, otto
console.log(saudar()); // olá, Visitante


function ola(qualquerCoisa){
    console.log('olá!');
    qualquerCoisa();
}

function callback(){
    console.log('callback function');
}

ola(callback); // olá 
// callback function

ola(() => console.log('otto')); // olá
// otto


function criarMultiplicador(multiplicador){
    return function(numero){
        return numero * multiplicador;
    };
}

const dobrar = criarMultiplicador(2);
console.log(dobrar(5)); // 10


function pai(){
    let nome = 'joão';

    function filho(){
        console.log(nome);
    }

    filho();
}

pai(); // joão


function mostrarDepois(){
    setTimeout(() => {
        console.log('isso aparece depois de 3 segundos');
    }, 3000)
}

// mostrarDepois(); // isso aparece depois de 3 segundos


async function pegarDados(){ // retorna uma promise
    return 'Dados recebidos!';
}

// pegarDados().then(console.log); // Dados recebidos!


async function buscarUsuario(){

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const dados = await resposta.json();
    console.log(dados);
}

// buscarUsuario();
// {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}



// ----------------------EXERCÍCIOS-------------------------



function contador(){
    let contador = 0;

    function contar(){
        contador++;
        console.log(contador);
    }

    function getCounter(){
        return contador;
    }

    return {contar, getCounter};
}

const contar = contador();
contar.contar(); // +1
console.log(contar.getCounter()); // 1
contar.contar(); // +1


const gerarSenha = (tamanho) => {
    const letrasMinusculas = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    const letrasMaiusculas = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const numeros = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    const arrayChar = [letrasMaiusculas, letrasMinusculas, numeros];

    let senha = '';

    for(let i=tamanho; i > 0; i--){
        senha += arrayChar[Math.floor(Math.random() * 3)];
    }

    return senha;
}

// console.log(String.fromCharCode(97)); // a
// console.log(String.fromCharCode(122)); // z
// console.log(String.fromCharCode(65)); // A
// console.log(String.fromCharCode(90)); // Z

// console.log(String.fromCharCode(48)); // 0
// console.log(String.fromCharCode(57)); // 9

// console.log(Math.ceil(Math.random()) * 100);

console.log(gerarSenha(7));


function filtrarMensagem(mensagem, palavrasProibidas){

    let mensagemFiltrada = '';

    for(let palavra of mensagem.split(' ')){
        if(!palavrasProibidas.includes(palavra)){
            mensagemFiltrada += palavra + ' ';
        };
    }

    return mensagemFiltrada;
}

console.log(filtrarMensagem('JavaScript é incrível, mas Python também!', ['Python']));



function temporizador(segundos){

    let contador = segundos;

    const intervalo = setInterval(() => {
        console.log(contador);
        contador--;

        if(contador === 0){
            clearInterval(intervalo); // interrompe o setInterval
            console.log('BOOM!');
        }
    }, 1000);
}

// temporizador(5);



function multiplicador(numero){

    return function triplicar(n){
        return numero * n;
    };
}

const triplicar = multiplicador(2);
console.log(triplicar(5)); // 10

const duplicar = multiplicador(7);
console.log(duplicar(2)); // 14


// ---------------SOLUÇÕES CHATGPT-------------------------



const gerarSenha2 = (tamanho) => {

    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';

    for(let i = 0; i < tamanho; i++){
        senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    return senha;
}

console.log(gerarSenha2(8));


function filtrarMensagem2(mensagem, palavrasProibidas){

    return mensagem
        .split(' ')
        .filter(palavra => !palavrasProibidas.includes(palavra))
        .join(' ');
}

console.log(filtrarMensagem("Eu amo JavaScript mas odeio bugs", ["odeio"]));


function multiplicador2(numero){
    return n => numero * n;
}

const triple = multiplicador(2);
console.log(triple(5)); // 10


// ----------------EXERCÍCIOS---------------------------


async function buscarUsuario(pokemon){

    try{
        const dados = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const resposta = dados.json();
        console.log(resposta.name);
    }
    catch(error){
        console.error(error);
    }
}

buscarUsuario('pikachu').then(console.log());