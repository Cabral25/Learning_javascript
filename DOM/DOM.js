
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


function adicionarTarefa(){

    const lista_ = document.getElementById('lista');

    const novoItem = document.createElement('li');
    const tarefa = document.createElement('input');
    const novoBotao_ = document.createElement('button');
    const botaoCancelar = document.createElement('button');

    novoBotao_.textContent = 'salvar';
    botaoCancelar.textContent = 'cancelar';
    tarefa.placeholder = 'Sua tarefa aqui';
    tarefa.id = 'input';

    tarefa.classList.add('tarefa');
    novoBotao_.classList.add('botaoSalvar');
    botaoCancelar.classList.add('botaoCancelar');

    lista_.append(tarefa)
    lista_.append(novoBotao_);
    lista_.append(botaoCancelar);

    let valorInput = document.getElementById('input');

    novoBotao_.addEventListener('click', event => {

        if(valorInput.value === ''){
            window.alert('insira uma tarefa');
        }
        else{
            novoItem.textContent = valorInput.value;
            lista_.appendChild(novoItem);
            tarefa.remove();
            novoBotao_.remove();
            botaoCancelar.remove();
        }
    })

    botaoCancelar.addEventListener('click', event => {

        tarefa.remove();
        novoBotao_.remove();
        botaoCancelar.remove();
    })
}


function removerTarefa(){

    let tarefas = document.querySelectorAll('li');
    const list = document.getElementById('lista');

    const numeroTarefa = document.createElement('input');
    const botaoExcluir = document.createElement('button');
    const botaoCancelar_ = document.createElement('button');

    numeroTarefa.placeholder = 'número da tarefa';
    botaoExcluir.textContent = 'excluir';
    botaoCancelar_.textContent = 'cancelar';

    numeroTarefa.classList.add('tarefa');
    botaoExcluir.classList.add('botaoSalvar');
    botaoCancelar_.classList.add('botaoCancelar');

    list.append(numeroTarefa);
    list.append(botaoExcluir);
    list.append(botaoCancelar_);

    botaoExcluir.addEventListener('click', event => {

        if(numeroTarefa.value === ''){
            window.alert('entre com uma tarefa a ser excluída');
        }
        else{
            let tarefaApagar = numeroTarefa.value;
            if(tarefaApagar < 1 || tarefaApagar > tarefas.length){
                window.alert('opção fora do range de opções');
            }
            else{
                list.removeChild(tarefas[tarefaApagar - 1]);
                numeroTarefa.remove();
                botaoExcluir.remove();
                botaoCancelar_.remove();
            }
        }
    })

    botaoCancelar_.addEventListener('click', event => {

        numeroTarefa.remove();
        botaoExcluir.remove();
        botaoCancelar_.remove();
    })

}

//---------------------RELEMBRANDO-------------------------


console.log(meusParagrafos); // HTMLCollection
//  [p.texto, p.texto, p.texto]
console.log(meusParagrafos.length); // 3
for(let paragrafo of meusParagrafos){
    console.log(paragrafo.textContent);
}
// Parágrafo 1
// Parágrafo 2
// Parágrafo 3

console.log(meusPs); // HTMLCollection
// [h5#texto1, h5, h5, texto1: h5#texto1]
for(let p of meusPs){
    console.log(p.textContent);
}
// Novo Título
// texto 2
// texto 3

console.log(meuP);
// <h4>Texto alterado</h4>

console.log(nodeList);
// NodeList(3)
// 0: h3.query
// 1: h3.query
// 2: h3.query
// length: 3
// [[Prototype]]: NodeList
console.log(nodeList.length); // 3


const link = document.querySelector('footer');

link.setAttribute("href", "https://google.com");
console.log(link.getAttribute('href'));
link.removeAttribute('target');


console.log(link.lastChild);


//------------------Exercícios--------------------------


let display = document.getElementById('display');

const botaoAumentar = document.getElementById('incrementar');
const botaoDiminuir = document.getElementById('decrementar');

botaoAumentar.addEventListener('click', () => {

    display.textContent++;
})

botaoDiminuir.addEventListener('click', () => {

    if(display.textContent > 0){
        display.textContent--;
    }
})



const botaoNome = document.getElementById('enviar');
let inputNome = document.getElementById('nome');

botaoNome.addEventListener('click', event => {

    event.preventDefault();

    if(inputNome.value === ''){
        alert('insira um nome!');
    }
})



const botaoClaro = document.getElementById('claro');
const botaoEscuro = document.getElementById('escuro');

botaoClaro.addEventListener('click', () => {

    document.body.style.backgroundColor = gerarCorAleatoria();
})


function gerarCorAleatoria(){

    r = Math.trunc(Math.random() * 256);
    g = Math.round(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}