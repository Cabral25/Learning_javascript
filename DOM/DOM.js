
const h1 = document.getElementById('titulo');

h1.style.color = 'blue';
h1.style.fontFamily = 'Arial';


const meusParagrafos = document.getElementsByClassName('texto'); // retorna uma coleção de HTML

meusParagrafos[0].style.color = 'red';
meusParagrafos[2].style.color = 'yellow';

for(let paragrafos of meusParagrafos){
    paragrafos.style.fontFamily = 'Italic';
}
console.log(meusParagrafos);
// HTMLCollection(3)
// 0: p.texto
// 1: p.texto
// 2: p.texto
// length: 3
// [[Prototype]]: HTMLCollection


const meusPs = document.getElementsByTagName('h5'); // retorna uma HTML Collection


Array.from(meusPs).forEach(p => { // Array converte a HTML Collection em um array
    p.style.color = 'purple';
})



const meuP = document.querySelector('h4'); // retorna apenas o primeiro elemento que corresponder ao seletor css


meuP.textContent = 'Texto alterado';

console.log(meuP);
// <h4>Texto alterado</h4>

const nodeList = document.querySelectorAll('.query');

nodeList.forEach(node => {
    node.style.color = 'orange';
})

console.log(nodeList);
// NodeList(3)
// 0: h3.query
// 1: h3.query
// 2: h3.query
// length: 3
// [[Prototype]]: NodeList


document.body.style.backgroundColor = 'hsl(0, 0%, 0%, 0.23)';

document.getElementById('texto1').innerHTML = "<span style='color:red'>Novo Título</span>";
// innerHTML permite definir HTML dentro do elemento

const meuH2 = document.createElement('h2');
const novoP = document.createElement('p');

meuH2.textContent = 'Parágrafo inserido a partir do DOM';
meuH2.id = 'meuh2';

novoP.textContent = 'Parágrafo inserido a partir do DOM';

// document.body.appendChild(meuH2); // appendChild() adiciona o novo elemento ao final do body.
document.getElementById('box1').prepend(novoP); // adiciona ao início da lista de parágrafos

const span = document.getElementById('span');
span.remove(); // remove um elemento HTML do DOM

const botao = document.getElementById('mudarCor');

botao.addEventListener('click', event => {
    document.body.style.backgroundColor = 'red';
})

const botaoCor = document.getElementById('botaoCor');

botaoCor.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'green';
})

botaoCor.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = '';
})

document.addEventListener('keydown', (event) => {
    //console.log(`Tecla pressionada: ${event.key}`);
})

const header = document.getElementById('header');

header.classList.add('dom'); // não funciona ñ sei pq

//-----------------exercício------------------------

const addButton = document.getElementById('addTarefa');

addButton.addEventListener('click', (event) => {
    
    const novoInput = document.createElement('input');
    const novaLista = document.createElement('li');
    const novoBotao = document.createElement('button');

    const valorInput = novoInput.value;

    novoInput.placeholder = 'Sua tarefa aqui';
    novoInput.type = 'text';

    novoBotao.textContent = 'Adicionar tarefa'

    document.getElementById('toDoList').prepend(novoInput);
    document.getElementById('toDoList').append(novoBotao);

    novoBotao.addEventListener('click', event => {

        pass
    })
})