/*const pBaru = document.createElement('p');
const nodeP = document.createTextNode('Halo JavaScript');
pBaru.appendChild(nodeP);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const cLi = document.createElement('li');
const nodecLi = document.createTextNode('Bikin <li> dari JavaScript');
cLi.appendChild(nodecLi);

const ul = document.querySelector('section#b ul');
const elementStlh = ul.querySelector('li:nth-child(1)');
ul.insertBefore(cLi, elementStlh);*/

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const wli = ul.querySelector('li:nth-child(3)');
//     wli.style.backgroundColor = 'lightblue';
// })

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const cli = document.createElement('li');
    const fli = document.createTextNode('<li> baru dari JavaScript');
    cli.appendChild(fli);

    const ul = document.querySelector('section#b ul');
    ul.appendChild(cli);
})

p4.addEventListener('mouseenter', function() {
    const ya = document.querySelector('section#b p');
    ya.style.backgroundColor = 'lightblue';
})

p4.addEventListener('mouseleave', function() {
    const ya = document.querySelector('section#b p');
    ya.style.backgroundColor = '#fff';
})