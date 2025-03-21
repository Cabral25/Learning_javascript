

const pessoa = {
    nome: 'Otto',
    sobrenome: 'Cabral',
    empregado: false,
    hobbies: ['dormir', 'comer', 'ler'],
    dizerOi: function(){console.log(`Olá, meu nome é ${this.nome}`)},
    exibirHobbies: function(){
        for(let hobby of this.hobbies){
            console.log(hobby);
        }
    }
}

console.log(pessoa.nome); // Otto
console.log(pessoa['sobrenome']); // Cabral
pessoa.exibirHobbies(); // dormir comer ler
pessoa.dizerOi(); // Olá, meu nome é Otto


const aluno = new Object();
aluno.nome = 'Sara';
aluno.idade = 19;

console.log(aluno.nome, aluno.idade); // Sara 19


function Pessoa(nome, idade){

    this.nome = nome;
    this.idade = idade;
    this.sayHi = function(){console.log(`My name is ${this.nome}`)}
}

const pessoa1 = new Pessoa('Ana', 23);
console.log(pessoa1.nome, pessoa1.idade); // Ana 23
pessoa1.sayHi(); // My name is Ana


const car = {
    marca: 'byd',
    modelo: 'dolphin',
    cor: 'azul'
}

console.log(car['marca']); // byd
console.log(car['modelo']); // dolphin

delete car.cor;

console.log(car); // {marca: 'byd', modelo: 'dolphin'}

console.log('cor' in car); // false
console.log('marca' in car); // true

for(let chave in car){ // iterando sobre as chaves
    console.log(chave); // marca modelo
}

for(let valor in car){
    console.log(car[valor]); // byd dolphin
}

console.log(Object.keys(car)); // ['marca', 'modelo']
console.log(Object.values(car)); // ['byd', 'dolphin']
console.log(Object.entries(car)); // [['marca', 'byd'], ['modelo', 'dolphin']]

for(let keys of Object.keys(car)){
    console.log(keys); // marca modelo
}

for(let values of Object.values(car)){
    console.log(values); // byd dolphin
}

for(let arrays of Object.entries(car)){
    console.log(arrays); // 
}
// ['marca', 'byd']
// ['modelo', 'dolphin']

for(let matrix of Object.entries(car)){
    for(let array of matrix){
        console.log(array); // marca
    }                      // byd
}                         // modelo
                         // dolphin


Object.freeze(car); // impede de adicionar, remover ou alterar propriedades
car.portas = 4; // não funciona
console.log(car); // {marca: 'byd', modelo: 'dolphin'}

Object.seal(pessoa); // Permite modificar propriedades, mas não adicionar/remover.
pessoa.empregado = true;
pessoa.altura = 1.85; // não adiciona
console.log(pessoa);
// {nome: 'Otto', sobrenome: 'Cabral', empregado: true, hobbies: Array(3), dizerOi: ƒ, …}


const json = JSON.stringify(car); // convertendo um objeto para json
console.log(json); // {"marca":"byd","modelo":"dolphin"}

const paraObjeto = JSON.parse(json); // convertendo para objeto js
console.log(paraObjeto); // {marca: 'byd', modelo: 'dolphin'}


const {marca, modelo} = car; // destructuring
console.log(marca); // byd
console.log(modelo); // dolphin

const {nome, sobrenome, empregado, hobbies, dizerOi} = pessoa;
console.log(empregado); // true
console.log(sobrenome); // Cabral
for(let hobby of hobbies){
    console.log(hobby);// dormir comer ler
}
dizerOi(); // Olá, meu nome é undefined


//-------------------Exercícios-----------------------


function filtraObjetos(arrayObjetos, propriedade){

    const objetosFiltrados = [];

    for(let objeto of arrayObjetos){
        if(objeto.hasOwnProperty(propriedade)){
            objetosFiltrados.push(objeto);
        }
    }

    return objetosFiltrados;
}

const capitais = [
    {brasil: 'brasília'},
    {china: 'pequim'},
    {frança: 'paris'}
]

console.log(filtraObjetos(capitais, 'brasil')); // [{brasil: 'brasília'}]
console.log(capitais[0].hasOwnProperty('brasil'));


const livro = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    anoPublicacao: 1898
}

livro.editora = 'nova editora';

console.log(livro['editora']); // nova editora
const livroAtualizado = {...livro, genero: 'drama'};


function contaBancaria(titular, saldo){

    this.titular = titular;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
        console.log(`Valor de R$${valor} depositado com sucesso!`);
    }
}

const conta = new contaBancaria('jéssica', 500);
console.log(conta.titular); // jéssica

conta.depositar(500);

console.log(conta.saldo); // 1000


function filtraCarros(objectsArray){

    return objectsArray.filter(objeto => objeto.ano > 2020);
}

const carros = [
    { marca: "Toyota", ano: 2022 },
    { marca: "Ford", ano: 2018 },
    { marca: "BMW", ano: 2020 }
];

console.log(filtraCarros(carros)); // [{marca: 'Toyota', ano: 2022}]

const object1 = {
    a: 1,
    b: 2
}
const object2 = {
    b: 3,
    c: 4
}

Object.assign(object1, object2); // Copy the values of all of the enumerable own properties from one or more source objects to a target object.
console.log(object1); // {a: 1, b: 3, c: 4}

Object.assign(object2, object1);
console.log(object2); // {b: 3, c: 4, a: 1}


function mesclaObjetos(objeto1, objeto2){

    return {...objeto1, ...objeto2};
}

console.log(mesclaObjetos(object1, object2)); // {a: 1, b: 3, c: 4}


function converterpraArray(objeto){

    return Object.entries(objeto);
}

console.log(converterpraArray(object1));