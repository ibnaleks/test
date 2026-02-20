# test3

Добавил Индекс
Добавил Стайл.цсс

Что добавить я не знаю
Лучше что-то удалю... 
Удалить ума не надо,
Так мне проще, так могу.

Это просто шпаргалка:

function test() {
  if (20 > 10) {
    let x = 'перец';
    console.log(x);
  }
}
test();

const myName = 'Хамза';
let myAge = 39;
const myCity = 'Набережные Челны';
let message = `Привет! Меня зовут ${myName}. Мне ${myAge} лет. Я из города ${myCity}.`;

console.log(message);

function addUser(name) {
  console.log(`Пользователь ${name} успешно добавлен. Поздравляем!🎉🥳`);
};

addUser('Хамза');
addUser(myName);
addUser(myCity);

function fullName(name = 'Фулян', firstName = 'Фулянович') {
  console.log(`Меня зовут ${name} ${firstName}.`);
  console.log(`Мне ${myAge} лет.`);
};

fullName('Дмитрий');
fullName('Сафия', 'Думбия');


function getNumber(a, b) {
  let result = (a * b);
  return result;
};

const result = getNumber(15, 10);
console.log(result);


const getNumber2 = (a, b) => {
  let result = (a + b);
  return result * result;
};

console.log(getNumber2(2, 2));

myAge = 18;

if (myAge >= 20) {
  console.log('Продажа разрешена');
} else {
  console.log('Продажа запрещена')
};

if (условие) {
  код, если условие true;
} else {
  код, если условие false;
};

переменная = условие ? код, если условие true ; код, если условие false;
