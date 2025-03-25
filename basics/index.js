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


// ===> TERNARY OPERATOR


let numero = 21;
let message = numero >= 18 ? "You're an adult" : "You're a minor."; // se numero > 18 return "You're an adult" else return "You're a minor."
console.log(message); // you are an adult


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

//out = multiply(2, 2);
//console.log(out); // 4


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


// ===> SPREAD OPERATORS = ... allows an iterable such as an array or string 
//                       to be expanded into separate elements (unpack the elements)


let nome = 'Cabral';
let letters = [...nome];
let letters_joined = [...nome].join('-');

console.log(letters); // ['C', 'a', 'b', 'r', 'a', 'l']
console.log(letters_joined); // C-a-b-r-a-l 


let frutas = ['uva', 'melão', 'pera'];
let newFruits = [...frutas];

let vegetables = ['carrots', 'onions', 'lettuce']
let foods = [...frutas, ...vegetables, 'eggs', 'milk'];

console.log(newFruits); // ['uva', 'melão', 'pera'] a shallow copy
console.log(foods); //  ['uva', 'melão', 'pera', 'carrots', 'onions', 'lettuce', 'eggs', 'milk']



// ===> REST PARAMETERS = bundles separate elements into an array



const food1 = 'pizza';
const food2 = 'hamburguer';
const food3 = 'sushi';
const food4 = 'meat';


function openFridge(...foods){ // accept any number of arguments and returns an array
//    console.log(foods); // ['pizza', 'hamburguer', 'sushi', 'meat']
    console.log(...foods); // pizza hamburguer sushi meat
}

function getFood(...foods){
    return foods;
}

openFridge(food1, food2, food3, food4);

const comidas = getFood(food1, food2, food3, food4);
console.log(comidas);


function soma(...numbs){

    let resultado = 0;

    for(let numb of numbs){
        resultado += numb;
    }

    return resultado;
}

const total = soma(5, 8, 9, 0, 5, 5);
console.log(`Your total is ${total}`);


function combineStrings(...strings){
    return strings.join(' ')
}

const fullNome = combineStrings("Bob", "Esponja", "III");
console.log(fullNome); // Bob Esponja III



// ===> CALLBACK = a function that is passed as an argument to another function


hello(goodbye);
// Hello
// Goodbye


function hello(callback){
    console.log('Hello');
    callback();
}

function goodbye(){
    console.log('Goodbye');
}


soma_(displayPage, 8, 8);


function soma_(callback, y, x){
    let resultado_ = x + y;
    callback(resultado_);
}

function displayConsole(resultat){
    console.log(resultat);
}

function displayPage(res){
    document.getElementById('myH1').textContent = res;
}



// ===> forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element
// array.forEach(callback) ---> element, index and array are provided



let numeros = [1, 2, 3, 4, 5];

numeros.forEach(square);
numeros.forEach(display);


function double(_element_, index_, array){
    array[index_] = _element_ * 2;
}

function square(_element_, index_, array){
    array[index_] = Math.pow(_element_, 2);
}


function display(elemento){
    console.log(elemento); // 1 2 3 4 5
}



// map() = accepts a callback and applies that function
// to each element of an array, then return a new array



const _numeros = [1, 2, 3, 4, 5];

const squares = _numeros.map(raiz)
const cubes = _numeros.map(cube);


function raiz(elemento_){
    return Math.pow(elemento_, 2);
}

function cube(elemento_){
    return Math.pow(elemento_, 3);
}

console.log(squares); // [1, 4, 9, 16, 25]
console.log(cubes); // [1, 8, 27, 64, 125]


const students = ['spongebob', 'patric', 'squidward'];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper); // ['SPONGEBOB', 'PATRIC', 'SQUIDWARD']


function upperCase(element){
    return element.toUpperCase();
}


const dates = ['2025-3-05', '2025-8-15', '2025-1-05'];
const formattedDates = dates.map(formatDates);

console.log(formattedDates); // ['05/3/2025', '15/8/2025', '05/1/2025']

function formatDates(element__){
    const parts = element__.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}



// filter() = filters lol



let nmbrs = [1, 2, 3, 4, 5, 6, 7]

const evenNums = nmbrs.filter(isEven_);
console.log(evenNums); // [2, 4, 6]

function isEven_(element){
    return element % 2 === 0;
}


let words = ['ace', 'ball', 'air','oil', 'car'];
const filtered = words.filter(removeAs);

console.log(filtered); // ['ball', 'oil', 'car']


function removeAs(element){
    return !element.startsWith('a');
}



// ===> REDUCE = reduce the elements of an array to a single value



const prices = [12, 5, 7, 32, 19];
const total_ = prices.reduce(somar);

console.log(total_);

function somar(accumulator, element){
    return accumulator + element;
}

const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum); // 95
console.log(minimum); // 50

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}



// ===> FUNCTION EXPRESSIONS = a way to define functions as values
//                             or variables



const hello_ = function(){
    console.log('Hello')
}

//setTimeout(function(){
//    console.log('Hello');
//}, 3000);

const pares = nmbrs.map(function(element){
    return element * 2;
})

console.log(pares); // [2, 4, 6, 8, 10, 12, 14]



// ===> ARROW FUNCTIONS = concise way to write function expressions;
//                        good for simple funcions that you use only once
//                        (parameters) => some code




const ola_ = () => console.log('Hello');
const ola = (name_) => console.log(`Hello, ${name_}`);
const _ola = (name, age) => {console.log(`Olá, ${name}`)
                             console.log(`Você tem ${age} anos`)};

ola_(); // Hello
ola('otto'); // Hello, otto
_ola('otto', 25); // Olá, otto Você tem 25 anos


//setTimeout( () => console.log('Hello'), 3000);

const nmbrs_ = [1, 2, 3, 4, 5, 6];

const sqrst = nmbrs_.map((element) => Math.pow(element, 2));
const cubos = nmbrs_.map((element) => Math.pow(element, 3));
const pares_ = nmbrs_.filter((element) => element % 2 === 0);
const soma__ = nmbrs_.reduce((accumulator, element) => accumulator + element);

console.log(sqrst); // [1, 4, 9, 16, 25, 36]
console.log(cubos); // [1, 8, 27, 64, 125, 216]
console.log(pares_); // [2, 4, 6]
console.log(soma__); // 21



// ===> OBJECT = A collection of related properties an/or methods
//               Can represent real world objects(products,places,people)
//               object = {key: value,
//                         function()}



const person = {
    firstName_: 'SpongeBob',
    lastName_: 'Squarepants',
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log('Hi, I am Spongebob!')},
    eat: function(){console.log('I am eating a krabby patty')},
}


const person2 = {
    firstName_: 'Patrick',
    lastName_: 'Star',
    age: 25,
    isEmployed: false,
    sayHello: () => console.log('Hi, I am Patrick...'), // using arrow functions
    eat: function(){console.log('I am eating a jelly jam')}, // function expression
}


console.log(person.firstName_); // SpongeBob
console.log(person.lastName_); // Squarepants
console.log(person.isEmployed); // true
person.sayHello(); // Hi, I am Spongebob!
person.eat();

console.log(person2.firstName_); // Patrick
person2.sayHello(); // Hi, I am Patrick...
person2.eat(); // I am eating a jelly jam



// THIS = reference to the object where THIS is used
//        (the object depends on the imediate context)
//        person.name = this.name
//        does not work with arrow functions



const pessoa1 = {
    nom: 'Spongebob',
    favoriteFood_: 'Hamburgers',
    dizerOi: function(){console.log(`Hi, I am ${this.nom}`)}, //just put 'non' does not work
    eat: function(){console.log(`${this.nom} is eating ${this.favoriteFood_}`)}
}

pessoa1.dizerOi(); // Hi, I am Spongebob
pessoa1.eat(); // Spongebob is eating Hamburgers



// ===> CONSTRUCTOR = special method for defining the 
//                    properties and methods of objects



function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car('ford', 'mustang', 2025, 'red');
const car2 = new Car('byd', 'dolphin', 2025, 'blue');

console.log(car1.model); // mustang
console.log(car1.color); // red

console.log(car2.model); // dolphin
console.log(car2.color); // blue
console.log(car2.year); // 2025
car1.drive(); // You drive the mustang
car2.drive(); // You drive the dolphin



// ===> CLASS



class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: R$${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salestax = 0.05;

const product1 = new Product('shirt', 99.99);
const product2 = new Product('pants', 22.99);

product1.displayProduct(); // Product: shirt  Price: R$99.99
product2.displayProduct(); // Product: pants  Price: R$22.99

const tot_ = product1.calculateTotal(salestax);
console.log(`R$${tot_.toFixed(2)}`); // R$104.99



// STATIC = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static not thhe objects)



class MathUtil{
    static _PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this._PI * radius;
    }
}

console.log(MathUtil._PI); // 3.14159
console.log(MathUtil.getDiameter(10)); // 20
console.log(MathUtil.getCircumference(5)); // 31.4159


class User{
    static userCount = 0; // belongs only to the class

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getuserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User('Spongebob');
const user2 = new User('Patrick');
const user3 = new User('Sandy');

console.log(user1.username); // Spongebob
console.log(User.userCount); // 3

user1.sayHello(); // Hello, my username is Spongebob
user2.sayHello(); // Hello, my username is Patrick
user3.sayHello(); // Hello, my username is Sandy

User.getuserCount(); // There are 3 users online



// INHERITANCE



class Animal{ // parent class or superclass
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal{ // child class or subclass
    name = 'rabbit';

    run(){
        console.log(`This ${this.name} is running.`)
    }
}

class Fish extends Animal{
    name = 'fish';

    swim(){
        console.log(`This ${this.name} is swimming.`)
    }
}

class Hawk extends Animal{
    name = 'hawk';

    fly(){
        console.log(`This ${this.name} is flying.`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(rabbit.alive); // false
console.log(rabbit.name); // rabbit

hawk.eat(); // This hawk is eating.
hawk.sleep(); // This hawk is sleeping.
hawk.fly(); // This hawk is flying.

fish.swim(); // This fish is swimming.
// fish.run(); // erro



// SUPER = access the properties and methods of a parent
//         this = this object
//         super = the parent



class Animal_{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    move(speed){
        console.log(`The ${this.nome} moves at a speed of ${speed}km/h`)
    }
}

class Coelho extends Animal_{

    constructor(nome, idade, velCorrida){
        super(nome, idade);
        this.velCorrida = velCorrida;
    }

    run(){
        console.log(`This ${this.nome} can run`);
        super.move(this.velCorrida); // use the parent's move method
    }
}

class Peixe extends Animal_{
    
    constructor(nome, idade, velNado){
        super(nome, idade);
        this.velNado = velNado;
    }

    swim(){
        console.log(`This ${this.nome} can swim`);
        super.move(this.velNado);
    }
}


class Aguia extends Animal_{
    
    constructor(nome, idade, velVoo){
        super(nome, idade);
        this.velVoo = velVoo;
    }

    fly(){
        console.log(`This ${this.nome} can fly`);
        super.move(this.velVoo);
    }
}

const coelho = new Coelho('bunny', 1, 25);
const peixe = new Peixe('fish', 2, 15);
const aguia = new Aguia('hawk', 5, 35)

console.log(coelho.nome); // bunny
console.log(coelho.velCorrida); // 25
console.log(coelho.idade); // 1

console.log(peixe.velNado); // 15
console.log(aguia.velVoo); // 35

coelho.run(); // This bunny can run 
// The bunny moves at a speed of 25km/h
peixe.swim(); // This fish can swim
// The fish moves at a speed of 15km/h
aguia.fly(); // This hawk can fly
// The hawk moves at a speed of 35km/h



// ===> GETTERS AND SETTERS

// getter = special method that makes a property readable
// setter = special method that makes property writeable
// validate and modify a value when reading/writing a property



class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.error('Width must be a positive number');
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight
        }
        else{
            console.error('Height must be a positive number');
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return (this._width * this._height).toFixed(1);
    }
}

const rectangle = new Rectangle(3, 4);
const rectangle2 = new Rectangle(-888888, 'pizza')

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width); // 5
console.log(rectangle.height); // 6
console.log(rectangle2.width); // Width must be a positive number
console.log(rectangle2.height); // Height must be a positive number

console.log(rectangle.area); // 30.0


class Pessoa{

    constructor(firstNome, lastName, age){
        this.firstNome = firstNome;
        this.lastName = lastName;
        this.age = age;
    }

    set firstNome(newFirstNome){
        if(typeof(newFirstNome) === 'string' && newFirstNome.length > 0){
            this._firstNome = newFirstNome;
        }
        else{
            console.error('First name must be a non-empty string')
        }
    }

    set lastName(newLastName){
        if(typeof(newLastName) === 'string' && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error('Last name must be a non-empty string');
        }
    }

    set age(newAge){
        if(typeof(newAge) === 'number' && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error('Age must be a non-negative number');
        }
    }

    get firstNome(){
        return this._firstNome;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstNome + ' ' + this.lastName;
    }
}

const person_ = new Pessoa('otto', 'cabral', 8);

console.log(person_.lastName);
console.log(person_.firstNome);
console.log(person_.age);
console.log(person_.fullName);



// DESTRUCTURING = extracts value from arrays and objects
//                 then assign them to variables in a
//                 convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring



let a_ = 1;
let b_ = 2;

[a_, b_] = [b_, a_];

console.log(a_); // 2
console.log(b_); // 1


const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors); // ['black', 'green', 'blue', 'red', 'white']


const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor); // black
console.log(secondColor); // green
console.log(thirdColor); // blue
console.log(extraColors); // ['red', 'white']


const person1_ = {
    primeiroNome_: 'Spongebob',
    lastName: 'Squarepants',
    idade_: 30,
    job: 'Fry cook',
}

const person2_ = {
    primeNome_: 'Patrick',
    ULTName_: 'Star',
    idade_: 34,
}

const {primeiroNome_, lastName_, idade_, job} = person1_;
const {primeNome_, ULTName_, _idade_, _job="Unemployed"} = person2_;

console.log(primeiroNome_); // Spongebob
console.log(idade_); // 30
console.log(job); // Fry cook

console.log(ULTName_); // Star
console.log(primeNome_); // Patrick
console.log(_job); // Unemployed


function displayPerson({primeiroNome_, lastName, idade_, job}){
    console.log(`name: ${primeiroNome_} ${lastName}`);
    console.log(`idade: ${idade_}`);
    console.log(`job: ${job}`);
}

displayPerson(person1_);



// NESTED OBJECTS 



const alguem = {
    nomeLegal: 'Alice Cabral',
    ciclosSolares: 30,
    eEstudante: true,
    hobbies: ['reading', 'exercising', 'cooking'],
    address: {
        rua: 'Rua Anador',
        cidade: 'Manaus',
        pais: 'Brasil'
    }
}

console.log(alguem.nomeLegal); // Alice Cabral
console.log(alguem.ciclosSolares); // 30
console.log(alguem.eEstudante); // true
console.log(alguem.hobbies); // ['reading', 'exercising', 'cooking']
console.log(alguem.address.rua); // Rua Anador
console.log(alguem.address.cidade); // Manaus
console.log(alguem.address.pais); // Brasil
//console.log(alguem.hobbies[0]); // reading

for(property in alguem.address.value){
    console.log(alguem[property]); // Rua Anador Manaus Brasil
}


class Person{

    constructor(nickname, ciclos, ...endereco){
        this.nickname = nickname;
        this.ciclos = ciclos;
        this.endereco = new Endereco(...endereco);
    }
}


class Endereco{

    constructor(logradouro, unidadeMunicipal, country){
        this.logradouro = logradouro;
        this.unidadeMunicipal = unidadeMunicipal;
        this.country = country;
    }
}


const individuo1 = new Person('tulio', 25, '180 Anador street', 'Manaus', 'Brasil');
const individuo2 = new Person('ana', 19, '666 shitty street', 'xique-xique', 'Brasil');
const individuo3 = new Person('alice', 43, '69 tree street', 'tokyo', 'Japan');

console.log(individuo1.nickname); // tulio
console.log(individuo1.ciclos); // 25
console.log(individuo1.endereco.logradouro); // 180 Anador street
console.log(individuo1.endereco.unidadeMunicipal); // Manaus



// ARRAYS OF OBJECTS



const frutas_ = [{chamada: 'uva', cor: 'roxo', calorias: 95},
     {chamada: 'orange', cor: 'orange', calorias: 45},
      {chamada: 'banana', cor: 'yellow', calorias: 105},
       {chamada: 'coconut', cor: 'white', calorias: 159},
        {chamada: 'pineapple', cor: 'yellow', calorias: 37}];



console.log(frutas_[4].chamada); // pineapple
console.log(frutas_[4].calorias); // 37
console.log(frutas_[4].cor); // yellow

frutas_.push({chamada: 'watermelon', cor: 'green', calorias: 95})

console.log(frutas_);
// [{chamada: 'uva', cor: 'roxo', calorias: 95},
// {chamada: 'orange', cor: 'orange', calorias: 45},
// {chamada: 'banana', cor: 'yellow', calorias: 105},
// {chamada: 'coconut', cor: 'white', calorias: 159},
// {chamada: 'pineapple', cor: 'yellow', calorias: 37},
// {chamada: 'watermelon', cor: 'green', calorias: 95}]; 

frutas_.pop()

console.log(frutas_);
// [{chamada: 'uva', cor: 'roxo', calorias: 95},
// {chamada: 'orange', cor: 'orange', calorias: 45},
// {chamada: 'banana', cor: 'yellow', calorias: 105},
// {chamada: 'coconut', cor: 'white', calorias: 159},
// {chamada: 'pineapple', cor: 'yellow', calorias: 37}]

frutas_.splice(1, 2); // remove elements at certain indices

console.log(frutas_);
// [{chamada: 'uva', cor: 'roxo', calorias: 95},
// {chamada: 'coconut', cor: 'white', calorias: 159},
// {chamada: 'pineapple', cor: 'yellow', calorias: 37}]

frutas_.forEach(fruta => console.log(fruta.chamada)); // uva coconut pineapple
frutas_.forEach(fruta => console.log(fruta.cor)); // roxo white yellow

const fruitNames = frutas_.map(fruit => fruit.chamada);
const fruitColors = frutas_.map(fruta => fruta.cor);

console.log(fruitNames); // ['uva', 'coconut', 'pineapple']
console.log(fruitColors); // ['roxo', 'white', 'yellow']

const yellowFruits = frutas_.filter(fruta => fruta.cor === 'yellow');

console.log(yellowFruits); // {chamada: 'pineapple', cor: 'yellow', calorias: 37}

const maxFruit = frutas_.reduce((max, fruit) => 
    fruit.calorias > max.calorias ? fruit : max); // se fruit.calorias > max.calorias return fruit else return max

console.log(maxFruit); // {chamada: 'coconut', cor: 'white', calorias: 159}



// ===> SORT
//      sorts elements as strings in lexicographic order, not alphabetical
//      lexicographic = (alphabet + numbers + symbols) as strings



let countries = ['japan', 'china', 'albania', 'zimbabwe'];
let even = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

countries.sort();
console.log(countries); // ['albania', 'china', 'japan', 'zimbabwe']

even.sort((A, B) => A - B); // DO MAIOR PRO MENOR: B - A
console.log(even); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const persona = [{nomeSocial: 'otto', peso: 80, altura: 1.85},
    {nomeSocial: 'celia', peso: 86, altura: 1.65},
    {nomeSocial: 'renata', peso: 70, altura: 1.75},
    {nomeSocial: 'suzana', peso: 89, altura: 1.85}]

//persona.sort((a1, a2) => a2.peso - a1.peso); // reverse order

//console.log(persona);
// {nomeSocial: 'suzana', peso: 89, altura: 1.85}
// {nomeSocial: 'celia', peso: 86, altura: 1.65}
// {nomeSocial: 'otto', peso: 80, altura: 1.85}
// {nomeSocial: 'renata', peso: 70, altura: 1.75}

persona.sort((b1, b2) => b1.nomeSocial.localeCompare(b2.nomeSocial)); // pra garantir que strings estejam na ordem certa

console.log(persona);
// {nomeSocial: 'otto', peso: 80, altura: 1.85}
// {nomeSocial: 'celia', peso: 86, altura: 1.65}
// {nomeSocial: 'renata', peso: 70, altura: 1.75}
// {nomeSocial: 'suzana', peso: 89, altura: 1.85}



// ===> Date objects



const date = new Date();

console.log(date);
// Fri Mar 07 2025 13:48:27 GMT-0400 (Horário Padrão do Amazonas)

const data = new Date(2025, 2, 7, 1, 51, 3, 7); // 0 => january
console.log(data); // Fri Mar 07 2025 01:51:03 GMT-0400 (Horário Padrão do Amazonas)

const date_ = new Date('2025-01-02T12:00:00Z')
console.log(date_); // Thu Jan 02 2025 08:00:00 GMT-0400 (Horário Padrão do Amazonas)

const year = date.getFullYear();
const month = date.getMonth();
const day_ = date.getDate(); // not Day()
const hour = date.getHours();
const dayOfWeek = date.getDay();

console.log(year); // 2025
console.log(month); // 2
console.log(day_); // 7
console.log(hour); // 14
console.log(dayOfWeek); // 5 (friday)

date.setFullYear(2026);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(30);

console.log(date); // Thu Jan 01 2026 02:03:30 GMT-0400 (Horário Padrão do Amazonas)



// ===> CLOSURE = a function defined inside of another function,
//               Allow for private variables and state maintenance



function outer(){

    let messagem = 'Hello'; // private variable
    function inner(){
        console.log(messagem);
    }

    inner();
}

outer(); // hello

function createCounter(){

    let contador  = 0;

    function increment(){
        contador++;
        console.log(`Count increased to ${contador}`);
    }

    function getCount(){
        return contador;
    }

    return {increment, getCount}
}

const counter = createCounter();

counter.increment(); // Count increased to 1
counter.increment(); // Count increased to 2
counter.increment(); // Count increased to 3
counter.increment(); // Count increased to 4
console.log(`The current count is ${counter.getCount()}`); // The current count is 4


function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${score}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${score}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

const game = createGame();

game.increaseScore(5); // +5pts
game.increaseScore(6); // +11pts
game.decreaseScore(3); // -8pts
console.log(`The final score is ${game.getScore()}pts`); // The final score is 8pts




// setTimeout() = allows to schedule the execution of a function
//                after an amount of time(miliseconds)
//                setTimeout(callback, delay)



const bonjour_ = () => window.alert('Hello')

// setTimeout(bonjour_, 3000)

const timeoutId = setTimeout(() => window.alert('Hello'), 3000);

clearTimeout(timeoutId); // cancels the timeout function

let timeoutId_;

function startTimer(){
    timeoutId_ = setTimeout(() => window.alert('Hello'), 3000);
    console.log('STARTEd');
}

function clearTimer(){
    clearTimeout(timeoutId_);
    console.log('CLEARED');
}



// ===> ES6 Module



import {_PI_, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(_PI_);

const _circumference = getCircumference(5);
const _area = getArea(10);
const volume = getVolume(10);

console.log(_circumference); // 31.4159
console.log(`${_area.toFixed(2)}cm^2`);
console.log(`${_circumference.toFixed(2)}cm^3`);



// ===> Synchronous = executes line by line consecutevely
// in a sequential manner, it waits for an operation to complete


// Asynchronous = Allows multiple operations to be perfomed
// concurrently without waiting, Doesn't block the operation 
// flow and allows the program to continue


function func1(callback_){
    setTimeout(() => {console.log('task 1');
                callback_()}, 3000);
}

function func2(){
    console.log('task 2');
    console.log('task 3');
    console.log('task 4');
}


//func1(func2);



// Error = an object that is created to represent a
// problem that occurs
// Occur often with user input or establishing a connection



try{
    console.log(cf);
}
catch(error){
    console.error(error);
}
finally{

    console.log('This always executes');
}

console.log('You have reached the end');


try{
//    const dividend = Number(window.prompt('Enter a dividend: '));
//    const divisor = Number(window.prompt('Enter a divisor: '));

    if(divisor == 0){
        throw new Error("You can't divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must a number");
    }

    const produto = dividend / divisor;
    console.lag(produto);
}
catch(error){
    console.error(error);
}

console.log('You have reached the end')



// DOM = Document Object Model
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with.
//       Web browser constructs the DOM when it loads an 
//       HTML document, and structures all the elements in
//       tree-like representation. Javascript can access
//       the DOM to dynamically change the content, structure
//       and style of a web page




document.title = 'My website!'
document.body.style.backgroundColor = 'hsl(0, 0%, 50%)';

console.dir(document);



// Element selectors = Methods used to target and manipulate
//                    HTML elements
// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()        // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()     // NODELIST



const myHeading = document.getElementById('my-heading');
myHeading.style.backgroundColor = 'yellow';
myHeading.style.textAlign = 'center';

console.log(myHeading);


const fruits_ = document.getElementsByClassName('fruits');
//fruits_[2].style.backgroundColor = 'yellow'

for(let fruit of fruits_){
    fruit.style.backgroundColor = 'yellow'
}

Array.from(fruits_).forEach(fruit => {
    fruit.style.backgroundColor = 'green';
});

console.log(fruits_)


const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');
const _element = document.querySelector(".fruits"); // only returns a single element
const _fruits = document.querySelectorAll('li');
const foods_ = document.querySelectorAll('.fruits');

// h4Elements[0].style.backgroundColor = 'green';

for(let element of h4Elements){
    element.style.backgroundColor = 'red';
}


for(let li of liElements){
    li.style.backgroundColor = 'blue';
}

Array.from(liElements).forEach(element => {
    element.style.backgroundColor = 'lightgreen';
})

console.log(h4Elements);


_element.style.backgroundColor = 'yellow';


_fruits[3].style.backgroundColor = 'pink';
foods_[2].style.backgroundColor = 'orange';
foods_.forEach(food => {
    food.style.backgroundColor = 'yellow';
})

console.log(foods_);



// DOM Navigation = The process of naviating through the
//                  structure of an HTML document using js.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children



// -------------.firstElementChild--------------------

const element__ = document.getElementById('comidas');
const ulElements = document.querySelectorAll('ul');

const firstChild = element__.firstElementChild;
firstChild.style.backgroundColor = 'purple';

ulElements.forEach(ulelement => {
    const primeiraCrianca = ulelement.firstElementChild;
    primeiraCrianca.style.backgroundColor = 'purple';
})

// -------------.lastElementChild----------------------

const variavel = document.getElementById('sobremesas');
const lastChild = variavel.lastElementChild;
lastChild.style.backgroundColor = 'pink';

const elementsUl = document.querySelectorAll('ul');

elementsUl.forEach(element => {
    const lastElements = element.lastElementChild;
    lastElements.style.backgroundColor = 'yellow';
})

// --------------.nextElementSibling---------------------

const elementId = document.getElementById('comidas');
const nextSibling = elementId.nextElementSibling;
nextSibling.style.backgroundColor = 'orange';

// -------------.previousElementSibling-------------------

const __element = document.getElementById('laranja');
const previousSibling = __element.previousElementSibling;
previousSibling.style.backgroundColor = 'red';

// --------------.parentElement----------------------------

const _elemento = document.getElementById('milkshake');
const parent = _elemento.parentElement;
parent.style.backgroundColor = 'lime';

// -----------------.children-----------------------------

const elemento__ = document.getElementById('bebidas');
const children = elemento__.children; // returns an HTML collection

Array.from(children).forEach(child => {
    child.style.backgroundColor = 'red';
});



// Add & change HTML elements



// ------------ EXAMPLE 1 <h1> -------------------

const newH1 = document.createElement('h1');

newH1.textContent = 'i like pizza';
newH1.id = 'myH1_';
newH1.style.color = 'tomato';
newH1.style.textAlign = 'center';

document.body.append(newH1); // adds it to the bottom
// document.body.prepend(newH1);// adds it to the top
document.getElementById('box1').append(newH1); // makes newH1 the last child of box1, since there is already a <p> element in it
// document.getElementById('box1').prepend(newH1); // makes newH1 the first child

const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box2); // inserindo newH1 antes de box2

const boxes = document.querySelectorAll('.box'); // nodelist to select many elements
// document.body.insertBefore(newH1, boxes[1]);

// document.body.removeChild(newH1); // remove um elemento HTML do corpo(body)
document.getElementById('box1').removeChild(newH1); // remove uma das crianças de box1(parent)

// ------------------ EXAMPLE 2 <li> ------------------------

const newListItem = document.createElement('li');
const carambola = document.getElementById('star-fruit');

newListItem.textContent = 'coconut';
newListItem.id = 'coconut';
newListItem.style.fontWeight = 'bold';
newListItem.style.backgroundColor = 'tomato'

// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById('frutas_').prepend(newListItem); // makes it the first child of frutas_
document.getElementById('frutas_').append(newListItem); // makes it the last child
// document.getElementById('frutas_').insertBefore(newListItem, carambola); // coconut is now number 2

const listItems = document.querySelectorAll('#frutas_ li'); // returns a node list of all <li> elements

// document.getElementById('frutas_').insertBefore(newListItem, listItems[0]);

document.getElementById('frutas_').removeChild(newListItem); // removendo uma criança da lista ordenada



// ===> MOUSE EVENTS



// eventListener = Listen for especific events to create interactive
//                 web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback)


const myBox = document.getElementById('myBox');

//function changeColor(event){ // event is provided to us by the browser
//    event.target.style.backgroundColor = 'yellow';
//    event.target.textContent = 'OUCH! :('
//}

myBox.addEventListener('click', event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.textContent = 'OUCH! :(';
});

myBox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'red';
    event.target.textContent = 'Do not do it!';
});

myBox.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'lightgreen';
    event.target.textContent = 'Click me :)';
});

const myyButton = document.getElementById('myButton');
const myOtherBox = document.getElementById('myOtherBox');

myyButton.addEventListener('click', event => {
    myOtherBox.textContent = 'You clicked me :(';
    myOtherBox.style.backgroundColor = 'red';
})

myyButton.addEventListener('mouseover', event => {
    myOtherBox.style.backgroundColor = 'yellow';
    myOtherBox.textContent = 'Do not do it!'
})

myyButton.addEventListener('mouseout', event => {
    myOtherBox.textContent = 'Click me';
    myOtherBox.style.backgroundColor = 'lightgreen';
})



// ===> KEY EVENTS



//                 events: keydown, keyup
//                 document.addEventListener(event, callback)

const minhaCaixa = document.getElementById('minhaCaixa');
const moveAmount = 15;
let x__ = 0;
let y__ = 0;

document.addEventListener('keydown', event => {
    minhaCaixa.textContent = 'o7';
    minhaCaixa.style.backgroundColor = 'yellow'
});

document.addEventListener('keyup', event => {
    minhaCaixa.textContent = 'o/';
    minhaCaixa.style.backgroundColor = 'lightblue';
});

document.addEventListener('keydown', event => {
    if(event.key.startsWith('Arrow')){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y__ -= moveAmount;
                break;
            case "ArrowDown":
                y__ += moveAmount;
                break;
            case "ArrowLeft":
                x__ -= moveAmount;
                break;
            case "ArrowRight":
                x__ += moveAmount;
                break;
        }
        
//       minhaCaixa.style.top = `${y__}px`;
//        minhaCaixa.style.left = `${x__}px`;
    }
})

const botao = document.getElementById('meuBotao');
const imagem = document.getElementById('myImg');

botao.addEventListener('click', event => {

    if(imagem.style.display === 'none'){
        imagem.style.display = 'block';
        botao.textContent = 'Hide';
    }
    else{
        imagem.style.display = 'none';
        botao.textContent = 'Show';
    }
    
});



// NodeLists = Static collection of HTML elements by(id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeLists won't update to automatically reflect changes

let buttons = document.querySelectorAll('.myButtons');

// Add HTML/CSS properties

buttons.forEach(button => {
//    button.style.backgroundColor = 'red';
    button.textContent += ' :)';
});

// CLICK event listener

buttons.forEach(botao => {
    botao.addEventListener('click', event => {
        event.target.style.backgroundColor = 'green';
    })
});

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button => {
    button.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'hsl(205, 100%, 40%)';
    })
});

buttons.forEach(button => {
    button.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = 'hsl(205, 100%, 60%)';
    })
});

// ADD AN ELEMENT

const newButton = document.createElement('button');

newButton.textContent = 'Button 5 :)';
newButton.classList = 'myButtons'; // assigning an ID to the new button

document.body.append(newButton);

buttons = document.querySelectorAll('.myButtons'); // adding newButton to the nodeList manually

console.log(buttons);

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.target.remove();
        buttons = document.querySelectorAll('.myButtons');
        console.log(buttons);
    })
});



// classList = Element property in js used to interact with
//            an element's list of classes(CSS classes)
//            Allows you to make reusable code for many elements
//            across your webpage



// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains

const myButton_ = document.getElementById('myButton_');

myButton_.classList.add("enabled"); // applying css properties to the button
// myButton_.classList.remove("enabled"); // removing it

//myButton_.addEventListener('mouseover', event => {
//    event.target.classList.add("hover");
//})

myButton_.addEventListener('mouseover', event => {
    event.target.classList.toggle("hover");
})

myButton_.addEventListener('mouseout', event => {
    event.target.classList.toggle("hover");
})

//myButton_.addEventListener('mouseout', event => {
//    event.target.classList.remove("hover");
//})

myButton_.addEventListener('click', event => {

    if(event.target.classList.contains("disabled")){
        event.target.textContent += ':)';
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }

    
})

const meuH1 = document.getElementById('meuH1');

meuH1.classList.add('enabled');

meuH1.addEventListener('click', event => {

    if(event.target.classList.contains('disabled')){
        event.target.textContent += ');'
    }
    else{
        event.target.classList.replace('enabled', 'disabled');
    }
});

let botoes = document.querySelectorAll('.meusBotoes');

botoes.forEach(botao => {
    botao.classList.add('enabled');
});

botoes.forEach(botao => {
    botao.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover');
    })
});

botoes.forEach(botao => {
    botao.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover');
    })
});

botoes.forEach(botao => {
    botao.addEventListener('click', event => {

        if(event.target.classList.contains('disabled')){
            event.target.textContent += '):';
        }
        else{
            event.target.classList.replace('enabled', 'disabled');
        }

    })
});



// ===> PROMISES = An object that manages asynchronous operations.
//                 Wrap a Promise Object around {asynchronous code}
//                 "I promise to return a value"
//                 PENDING -> RESOLVED or REJECTED
//                 new Promise((resolve, reject) => {asynchronous code})



function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
        const dogWalked = true;

        if(dogWalked){
            resolve('You walk the dog 🐕');
        }
        else{
            reject("You DIDN'T walk the dog!")
        }
        
        
    }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
        const kitchenCleaned = true;

        if(kitchenCleaned){
            resolve('You clean the kitchen 🧹');
        }
        else{
            reject("You DIDN'T clean the kitchen");
        }
        
    }, 2500);
    })
}

function takeOutTrash(){

    return new Promise((resolve, rejec) => {
       setTimeout(() => {

        const trashTakenOut = false;

        if(trashTakenOut){
            resolve('You take out the trash 🚮');
        }
        else{
            rejec("You DIDN'T take out the trash!");
        }
        
    }, 500); 
    })
}

//walkDog().then(value => {console.log(value); return cleanKitchen()})
//         .then(value => {console.log(value); return takeOutTrash()})
//         .then(value => {console.log(value); console.log("You finished all the chores")})
//         .catch(error => console.error(error));



// ===> Async/Await 



// Async = makes a function return a promise
// Await = makes an async function wait for a promise
// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

async function doChores(){

    try{
       const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores."); 
    }
    catch(error){
        console.error(error);
    }

    
}

// doChores()



// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR {value1, value2, value3}

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object


const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const pessoa = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "cooking"]
};


const pessoas = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];


const jsonString = JSON.stringify(names);


console.log(jsonString);


const jsonNames = `["Spongebob","Patrick","Squidward","Sandy"]`;
const jsonPerson = `{"name":"Spongebob","age":30,"isEmployed":true,"hobbies":["Jellyfishing","Karate","cooking"]}`;
const jsonPeople = `[{"name":"Spongebob","age":30,"isEmployed":true},
                    {"name":"Patrick","age":34,"isEmployed":false},
                    {"name":"Squidward","age":50,"isEmployed":true},
                    {"name":"Sandy","age":27,"isEmployed":false}]`;
                
const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);

fetch("people.json")
//    .then(response => response.json())
//    .then(values => values.forEach(value => console.log(value.name)))
//    .catch(error => console.error(error))

// Spongebob
// Patrick
// Squidward
// Sandy



// ===> Fetch data from an API



// fetch = Function used for making HTTP requests to fetch resources
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in js and used
//         for interacting with APIs to retrieve and send data
//         asynchronously over the web
//         fetch(url, {options})


//fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok){
           throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data_ => console.log(data_.name))
    .catch(error => console.error(error));

async function fetchData(){

    try{

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!resposta.ok){
            throw new Error("Could not fetch resource")
        }

        const dado = await resposta.json();
        const pokemonSprite = dado.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprite');

        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';
    }
    catch(error){
        console.error(error);
    }
}

document.getElementById("buscar").addEventListener("click", fetchData);


// fim 13/03/25