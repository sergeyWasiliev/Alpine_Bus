// const a = getSumArrow(1, 2); // 3
// console.log(a);

function getSum(num1, num2 = 10) {
    return num1 + num2
}

const getSumArrow = (num1, num2 = 10) => num1 + num2;

const b = getSum(77, 3); // 80
const d = getSum(30); // 40
const e = getSum(1, 'hello'); // 1 + 'hello' => '1hello'

// console.log(a);
// console.log(b);
// console.log(e);

// 2. Напишите функцию getResult, которая будет принимать число и возвращать его квадрат. Создать переменную с результатом вызовать функции, вывести результат в консоль

function getResult(num){
    return num ** 2
}

const getResultArrow = num => num ** 2;

const c = getResult(12); // 144
// console.log(c);


// 3. Напишите функцию getAnswer, которая будет принимать число и возвращать POSITIVE, если число > 0, и возвращать NEGATIVE, если число <= 0

function getAnswer(num) {
    return num > 0 ? 'POSITIVE' : 'NEGATIVE'
}

const getAnswerArrow = num => num > 0 ? 'POSITIVE' : 'NEGATIVE';

const f = getAnswer(10); // 'POSITIVE'
const g = getAnswer(-10); // 'NEGATIVE'

// console.log(f);
// console.log(g);



// ОБЪЕКТЫ

const user = {
    firstName: 'Oleg',
    lastName: 'Petrov',
    age: 30,
    isOnline: true,
    languages: ['Russian', 'English', 'German'],
    address: {
        country: 'Germany',
        city: 'Berlin',
        street: 'Friedrichstr.',
        building: 10,
        apartment: 205
    }
}

const x = 'age';

// console.log(user);
// console.log(user.name); // undefined
// console.log(user.age); // 30
// console.log(user['age']); // 30
// console.log(user.languages); // ['Russian', 'English', 'German']
// console.log(user.languages[0]); // 'Russian'

// console.log(user.address.city); // 'Berlin'


const user2 = {
    ...user,
    gender: 'male',
    age: 40
}

const user3 = {
    firstName: user.firstName,
    lastName: user.lastName
}

// console.log(user);
// console.log(user2);
// console.log(user3);