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
console.log(`you are ${age}`);
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