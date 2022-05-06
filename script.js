const cont  = document.querySelector(".container");

const par = document.createElement('p');
par.textContent = "Hey I'm red";
par.style.color = 'red';
cont.appendChild(par);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3";
h3.style.color = 'blue';
cont.appendChild(h3);

const div = document.createElement('div');
div.style.border = '2px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const pard = document.createElement('p');
pard.textContent = "Me too!";
div.appendChild(pard);

cont.appendChild(div);
