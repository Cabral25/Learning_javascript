//                    Javascript(20/02/2025)

//console.log(`hello`);
//console.log('I like pizza')

// window.alert('This is an alert');

//this is a comment

/*
    This 
    is
    a
    comment
*/

document.getElementById('my-h1').textContent = 'Hello';
document.getElementById('my-p').textContent = 'I like pizza';


// ===> declaring a variable


// 1. declaration of a variable          let x;
// 2. assignment of a variable           x = 100
// 3. declaration and assignment         let x = 100

let x;
x = 100;
let y = 200

console.log(x);  // 100
console.log(y); // 200


// ===> types of variables


let age = 25;
let price = 10.99;
let gpa = 2.1;
name = 'Otto'

console.log(age);
console.log(price);
console.log(`you are ${age}`); // you are 25
console.log(`The price is $${price}`);
console.log(`Your gpa is ${gpa}`);
console.log(`My name is ${name}`);

console.log(typeof age); // number
console.log(typeof price); // number
console.log(typeof name); // string

let firstname = 'Linda';
console.log(typeof firstname); // string

let bool = true;
console.log(typeof bool) // boolean

let list = [1, 2, 3];
console.log(typeof list) // object

console.log(`Her name is ${firstname}`); // Her name is Linda

let favoriteFood = 'cheese';
console.log(`My favorite food is ${favoriteFood}`);

let online = true;
console.log(typeof online); // boolean


let primeiroNome = 'Otto';
let idade = 24;
let student = false;
document.getElementById('p1').textContent = `Your name is ${primeiroNome}`;
document.getElementById('p2').textContent = `You are ${idade} years old`;
document.getElementById('p3').textContent = `Student: ${student}`;


// ===> Arithmetic operators


let estudantes = 30;
estudantes = estudantes + 1; // 31
estudantes = estudantes - 1; // 30
estudantes = estudantes * 2 // 60
estudantes = estudantes / 2; // 30
estudantes = estudantes ** 2; // 900 (estudantes to the power of 2)
estudantes = estudantes % 2; // 0

estudantes += 1; // 1
estudantes += 29; // 30
estudantes -= 5; // 25
estudantes *= 2; // 50
estudantes /= 2; // 25
estudantes **= 2; // 625
estudantes %= 9; // 4

estudantes++; // 5 (increasing the value of the variable by only one)
estudantes--; // 4

console.log(estudantes) // 30


// ===> User input


let username;
// username = window.prompt('What is your username?');

document.getElementById('mysubmit').onclick = function() {
    username = document.getElementById('mytext').value;
    document.getElementById('myh1').textContent = `Hello, ${username}`;
};


// ===> type conversion


//let age_ = window.prompt("How old are you?")
//age_ = Number(age_) // convertendo pra number
//age_+=1;
//console.log(age_, typeof age_); // age_ 'number'

//let idade_ = window.prompt('Sua idade')
//idade_+=1;
//console.log(idade_, typeof idade_); // idade_1 string


let x_ = 'pizza';
let y_ = 'pizza';
let z = 'pizza';

x_ = Number(x_);
y_ = String(y_);
z = Boolean(z);

console.log(x_, typeof x_); // NaN 'number'
console.log(y_, typeof y_); // pizza string
console.log(z, typeof z); // true 'boolean'


// ===> constants (const)

// variables that can't be changed


const PI = 3.14159;
let radius;
let circumference;

//pi = 420.69; // erro

//radius = window.prompt('Enter the radius of the circle');
//radius = Number(radius);

//circumference = 2 * PI * radius;

document.getElementById('circle-sub').onclick = function() {
    radius = document.getElementById('rad-circle').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myh3').textContent = circumference + 'cm';
};


// ===> Math (built-in object that provides a collection of properties and methods)


console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045

let a = 3.21;
let b = 2;
let c;
let d = 3.99;
let e = 3.49;
let f = 5.9;
let g = 5;
let h = 25;

c = Math.round(a); // arredondando
console.log(c) // 3

c = Math.floor(d) // aredondando pra baixo
console.log(c) // 3

c = Math.ceil(e) // arredondando pra cima
console.log(c) // 4

c = Math.trunc(f); // elimina pontos flutuantes
console.log(c); // 5

c = Math.pow(g, b); // 5 elevado a dois
console.log(c); // 25

c = Math.sqrt(h); // square root
console.log(c); // 5

let max = Math.max(a, b, h); // valor mais alto em um grupo de números
console.log(max); // 25

let min = Math.min(a, b, h); // menor valor
console.log(min); // 2



// ===> if/else statements


let _age = 13;

if (_age >= 18){
    console.log('You are old enough.');
}
else{
    console.log('You are not old enough.'); // You are not old enough
}

let time = 14;

if(time < 12){
    console.log('Good morning');
}
else{
    console.log('Good afternoon.'); // Good afternoon.
}

let isStudent = true;

if(isStudent){
    console.log('You are a student.');
}
else{
    console.log('You are not a student.'); // You are a student
}


let _idade = -1;
let hasLicense = false;


if(_idade >= 16){
    console.log('You are old enough to drive.');

    if(hasLicense){
        console.log('You have your license');
    }
    else{
        console.log('You do not have your license yet.');
    }
}
else{
    console.log('You are not old enough to drive.');
}


if(_idade >= 100){
    console.log('You are too old to enter this site');
}
else if(_idade >= 18){
    console.log('You are old enough to enter this site');
}
else if(_idade < 0){
    console.log('Your age cant be below 0');
}
else{
    console.log('You are not old enough to enter this site.');
}


// ===> ternary operator


let numero = 21;
let message = numero >= 18 ? "You're an adult" : "You're a minor.";
console.log(message);


// ===> SWITCHES


let day = 5;

switch(day){
    case 1:
        console.log('It is monday');
        break;
    case 2:
        console.log('it is tuesday');
        break;
    case 3:
        console.log('it is wednesday');
        break;
    case 4:
        console.log('it is tuesday');
        break;
    case 5:
        console.log('it is thursday');
        break;
    case 6:
        console.log('it is saturday');
        break;
    case 7:
        console.log('it is sunday');
        break;
    default:
        console.log(`${day} is not a day.`);
}

let testScore = 50;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = 'A';
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore >= 70:
        letterGrade = 'C';
        break;
    default:
        letterGrade = 'F';
}

console.log(letterGrade);


// ===> Strings


let username_ = '   BroCode    ';

console.log(username_.charAt(0)); // B retorna a string em determinada posição

console.log(username_.indexOf('B')); // 0 retorna o index da primeira ocorrência de uma string
console.log(username_.indexOf('b')); // -1 string não encontada

console.log(username_.indexOf('o')); // 2
console.log(username_.lastIndexOf('o')); // 4 retorna o index da última ocorrência de uma string

console.log(username_.length); // 7

username_ = username_.trim(); // elimina espaços em branco
console.log(username_);

username_ = username_.toUpperCase();
console.log(username_); // BROCODE

username_ = username_.toLowerCase();
console.log(username_); // brocode

console.log(username_.repeat(2)); // brocodebrocode

let result = username_.startsWith("b");
console.log(result); // true
if(result){
    console.log('Username starts with the letter b');
}
else{
    console.log("Username does not start with the letter b");
}

console.log(username_.includes('bro')); // true
console.log(username_.includes('r')); // true
console.log(username_.includes('h')); // false


let phoneNumber = '123-456-789';

phoneNumber = phoneNumber.replaceAll('-', ''); // substituir todos
console.log(phoneNumber); // 123456789

phoneNumber = phoneNumber.padStart(15, '0'); // inserir os zeros até que a string tenha 15 caracteres
console.log(phoneNumber); // 000000123456789
phoneNumber = phoneNumber.padEnd(20, '0');
console.log(phoneNumber); // 00000012345678900000


// string slicing


const fullName = 'Otto Cabral Nogueira';
let firstName = fullName.slice(0, 4);
let lastName = fullName.slice(12, 20);
let lastChar = fullName.slice(-1);
let negativeChar = fullName.slice(-6);

console.log(firstName); // Otto
console.log(lastName); // Nogueira
console.log(lastChar); // a
console.log(negativeChar);// gueira


// ===> logical operators


// AND = &&
// OR = ||
// NOT = !

const temp = 20;

if(temp > 0 && temp <= 30){
    console.log('The weather is good'); // The weather is good

}
else{
    console.log('The weather is bad');
}

if(temp <= 0 || temp > 30){
    console.log('The weather is bad');
}
else{
    console.log('The weather is good'); // The weather is good

}


const isSunny = true;

if(!isSunny){ // if not sunny
    console.log('It is cloudy.');
}
else{
    console.log('It is sunny.'); // It is sunny.
}


// ---> Strict equality


// === strict equality operator (compare if values and datatype are equal)
// != inequality operator
// !== strict inequality


const PI_ = 3.14;

if(PI_ == '3.14'){
    console.log('That is PI.'); // That is PI
}
else{
    console.log('That is not PI.');
}

if(PI_ === '3.14'){ // the value Pi is different from the datatype of '3.14'(which is string)
    console.log('That is PI.'); // That is not PI
}
else{
    console.log('That is not PI.');
}

if(PI_ === 3.14){
    console.log('That is PI.'); // That is PI
}
else{
    console.log('That is not PI.');
}

if(PI_ !== 3.14){ // are the values or the datatype different?
    console.log('This is not pi!');
}
else{
    console.log('This is pi!'); // This is pi!
}


// ===> WHILE LOOPS


//let _username;

//while(_username === '' || _username === null){
//    _username = window.prompt('Enter your username');
//}


//do{
//    _username = window.prompt('Enter your username')
//}while(_username === '' || _username === null);

//console.log(`Hello, ${_username}!`);

let loggedIn = false;
let _username;
let password;

//while(!loggedIn){
//    _username = window.prompt('Enter your username');
//    password = window.prompt('Enter your password');

//    if(_username === 'myUsername' && password === 'myPassword'){
//        loggedIn = true;
//        console.log('You are logged in');
//    }
//    else{
//        console.log('Invalid credentials! Please try again');
//    }
//}

//do{
//    _username = window.prompt('Enter your username');
//    password = window.prompt('Enter your password');

//    if(_username === 'myUsername' && password === 'myPassword'){
//        loggedIn = true;
//        console.log('You are logged in');
//    }
//    else{
//        console.log('Invalid credentials! Please try again');
//    }
//}while(!loggedIn)



// ===> FOR LOOP


for(let i = 0; i <= 3; i++){
    console.log(i); // 0 1 2 3
}

for(let x = 0; x <= 10; x+=2){
    console.log(x); // 2 4 6 8 10
}

for(let y = 10; y > 0; y--){
    console.log(y); // 10 9 8 7 6 5 4 3 2 1
}

for(let z = 10; z > 0; z-=2){
    console.log(z); // 10 8 6 4 2
}

for(let a = 1; a <= 20; a++){

    if(a == 13){
        continue; // pulando um número
    }
    else{
        console.log(a); // 1 2 3 4 5 6 7 8 9 10 11 12 14 15 16 17 18 19 20
    }
    
}


// ===> FUNCTIONS


function happyBirthday(){
    console.log('Happy birthday to you');
    console.log('Happy birthday to you');
    console.log('Happy birthday to you');
}

happyBirthday();
// Happy birthday to you
// Happy birthday to you
// Happy birthday to you


function sum(a, b){
    console.log(a + b);
}

sum(5, 5); // 10


function multiply(n1, n2){
    let result_ = n1 * n2;
    return result_
}

out = multiply(2, 2);
console.log(out); // 4


function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(6)); // true



// ===> VARIABLE SCOPE = where a variable is recognized and accessible(local vs global)


let w = 10; // global variable


function function1(){
    let w = 1; // local variable
    console.log(w); // 1
}

function function2(){
    let w = 2; // local variable
    console.log(w); // 2
}

function function3(){
    console.log(w); // 10
}

function3();



// ===> ARRAYS = a variable like structure that can hold more than 1 value



let fruits = ['apple', 'orange', 'banana'];


console.log(fruits); // ['apple', 'orange', 'banana']
console.log(fruits[0]); // apple
console.log(fruits[1]); // orange

fruits[0] = 'coconut';

console.log(fruits[0]); // coconut

fruits.push('coconut'); // add another coconut to the end of the array
console.log(fruits); // ['coconut', 'orange', 'banana', 'coconut']

fruits.pop(); // remove an item from the end of the array
console.log(fruits); // ['coconut', 'orange', 'banana']

fruits.unshift('mango'); // add mango at the start of the array
console.log(fruits); // ['mango', 'coconut', 'orange', 'banana']

fruits.shift(); // remove the first element of the array
console.log(fruits); // ['coconut', 'orange', 'banana']

let numOfFruits = fruits.length;
let index = fruits.indexOf('orange');

console.log(numOfFruits); // 3
console.log(index); // 1

for(let e = 0; e < fruits.length; e++){
    console.log(fruits[e]); // coconut orange banana
}

fruits.sort();

for(let fruit of fruits){
    console.log(fruit); // banana coconut orange
}


// SPREAD OPERATORS = ... allows an iterable such as an array or string to be expanded into separate elements (unpack the elements)


let nome = 'Cabral';
let letters = [...nome];

console.log(letters); // ['C', 'a', 'b', 'r', 'a', 'l']