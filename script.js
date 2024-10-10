const container = document.querySelector('#container');

const outerPara = document.createElement('p');
outerPara.textContent = 'Hey I’m red!';

const h3 = document.createElement('h3');
h3.textContent = 'I’m a blue h3!';

const innerDiv = document.createElement('div');
innerDiv.setAttribute('style', 'background-color: pink; border: 1px solid black');


const innerH1 = document.createElement('h1');
innerH1.textContent = 'I’m in a div';

const innerPara = document.createElement('p');
innerPara.textContent = 'ME TOO!';

innerDiv.appendChild(innerH1);
innerDiv.appendChild(innerPara);

container.appendChild(outerPara);
container.appendChild(h3);
container.appendChild(innerDiv);



