

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

const paraObjeto = JSON.parse(json); // convertendo para objeto
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