const btn = document.querySelector('.btn');
const square = document.querySelector('.square');
const form = document.querySelector('.form');

// 1. При клике на кнопку выводится сообщение в консоль
// 2. При клике на кнопку квадрат красится в красный

btn.addEventListener('click', (event) => {
    console.log('Клик!!!');
    square.classList.toggle('red');
    // setTimeout(() => square.classList.toggle('red'), 3000);
    // setInterval(() => square.classList.toggle('red'), 3000)
});

// event - объект с информацией о произошедшем событии
// event.target - элемент с которым произошло событие

// 3. При клике на кнопку добавить ей новый класс red
btn.addEventListener('click', (event) => {
    event.target.classList.toggle('red')
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Hello!');
});



// Практика
// При клике на иконку ||:
    // 1. Показать nav.nav_menu - удалить класс hidden
    // 2. Показать иконку Х - удалить класс hidden
    // 3. Скрыть иконку || - - добавить класс hidden

// При клике на иконку Х
    // 1. Скрыть nav.nav_menu - добавить класс hidden
    // 2. Скрыть иконку Х - добавить класс hidden
    // 3. Показать иконку || - удалить класс hidden

const openIcon = document.querySelector('.open_icon');
const closeIcon = document.querySelector('.close_icon');
const navMenu = document.querySelector('.nav_menu');

openIcon.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
    closeIcon.classList.remove('hidden');
    openIcon.classList.add('hidden')
});

closeIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden');
    closeIcon.classList.add('hidden');
    openIcon.classList.remove('hidden')
});


console.log(1);
setTimeout(() => console.log(2), 3000);
console.log(3);
console.log(4);