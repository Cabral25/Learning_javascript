
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
        console.log('+1');
    }

    function getCounter(){
        console.log(contador);
    }

    return {contar, getCounter};
}

const contar = contador();
console.log(contar.contar()); // +1
console.log(contar.getCounter()); // 1