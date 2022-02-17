let div = document.createElement('div');
let textNode = document.createTextNode('Глупая шутка про табуретку');
document.body.append(div);
div.append(textNode);
//1 Задание
let ol = document.createElement('ol');
document.body.appendChild(ol);

let li = document.createElement('li');
let txt = document.createTextNode("Шутка 1");
li.appendChild(txt);
ol.appendChild(li);

let li2 = document.createElement('li');
let txt2 = document.createTextNode("Шутка 2");
li2.appendChild(txt2);
ol.appendChild(li2);

let li3 = document.createElement('li');
let txt3 = document.createTextNode("Шутка 3");
li3.appendChild(txt3);
ol.appendChild(li3);
//2 Задание
div.classList.add('goos');
let goose = document.querySelector('.goos');
goose.style.color = "red";
//3 Задание
li.classList.add('myol');
let myol = document.querySelector('.myol');
myol.style.color = "green";

li2.classList.add('lik');
let lik = document.querySelector('.lik');
lik.style.margin = "15px";

li3.classList.add('lin');
let lin = document.querySelector('.lin');
lin.style.cssText = `font-size:20px;
`;

ol.classList.add('mol');
let mol = document.querySelector('.mol');
mol.style.cssText = `
width: 120px;
background-color: pink;
border: 2px solid black;
border-radius: 15px;
`;
//4 Задание
var res =0;
function multi(){
    let inp1 = document.getElementById('inp_1').value,
    inp2 = document.getElementById('inp_2').value;

    res=inp1*inp2;

    let div2 = document.createElement('div');
    document.body.append(div2);
    div2.classList.add('blok');
    let blok = document.querySelector('.blok').innerHTML =res;
    div2.style.cssText=
    `
    width:100px;
    height:100px;
    background-color: yellow;
    display:block;
    text-align: center;
    font-size:20px;
    padding-top: 40px;
    box-sizing: border-box; 
   `;
}