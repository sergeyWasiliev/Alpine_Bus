// 1. Найти элемент
const header = document.querySelector('h1');
const par1 = document.querySelector('.par1');
const a = document.querySelector('.a');
const elephant = document.querySelector('.elephant');
const container = document.querySelector('.container');

const parCollection = document.querySelectorAll('p');

// console.log(header.parentElement); // body
// console.log(par1.nextElementSibling); // p.par2
// console.log(window);
// console.log(parCollection);
// console.log(parCollection[0]);


// 2. Что-то сделать с элементом
// 2.1 Заменить текст внутри элемента
par1.textContent = 'hello!';
header.textContent = 'Это замена первому заголовку';

// par1.innerHTML = '<h2>это h2</h2>'

// 2.2 Добавить/удалить класс
par1.classList.add('par1NewClass');
par1.classList.remove('par1');


// 2.3 Изменить значение атрибута
elephant.alt = 'Это очень большой слон';
elephant.src = 'https://nekrasovka.ru/img/16287/mobile';


// 3. Создать элемент
const newPar = document.createElement('p');
newPar.classList.add('newParClass');
newPar.textContent = 'Это новый параграф';
container.append(newPar);


// ПРАКТИКА
// 1. В контейнер div.cotainer добавить img с атрибутами src и alt
const newImg = document.createElement('img');
newImg.src = 'https://lh5.googleusercontent.com/proxy/k1cRbp3Q3qhnHSSLJc80t2ukc5t0-nnSNH_26qFJiifbQUKkxRMOtyLX1iFvA7HkFMuBnIjjv2wCLP3Xdcx-oh0o';
newImg.alt = 'Это петушок';
newImg.classList.add('newImgClass');
container.append(newImg);

// 2. Есть массив строк users. Для каждого пользователя создать p с текстом имени и добавить все параграфы с именами div.users

const usersContainer = document.querySelector('.users');

const users = ['Anna', 'Oleg', 'Petr', 'Max', 'Alina', 'Felix'];

for(let i = 0; i < users.length; i++){
    const userElement = document.createElement('p');
    userElement.textContent = users[i];
    usersContainer.append(userElement);
}