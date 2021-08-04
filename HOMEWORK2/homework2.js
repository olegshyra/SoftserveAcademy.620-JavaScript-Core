// ------------------------------------task1-----------------------------------------------------
console.log('task1:');
let x = 1;
let y = 2;

let res1 = x+''+ y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = (x==x)+'' + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = (x!=y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = NaN+x+y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

// ------------------------------------task2-----------------------------------------------------

/*Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
	a) парним додатним;
	b) кратним числу 7.
Результат перевірки вивести в консоль.
*/
console.log('\n task2:');
let number = prompt('number:', "enter the number");
if (number % 2 == 0) {
    console.log("the number:"+number+" is even"); 
}
else
{
    console.log("the number:"+number+" is odd");
}
if (number % 7 ==0) {
    console.log("the number:"+number+" is a multiple of 7");
 }
 else
 {
    console.log("the number:"+number+" is not a multiple of 7");
 }

 // ------------------------------------task3-----------------------------------------------------
 /*Створіть порожній масив;
 1) У перший елемент масиву запишіть будь-яке число;
 2) У другий елемент масиву запишіть будь-який рядок;
 3) У третій елемент масиву запишіть будь-яке логічне значення;
 4) У четвертий елемент масиву запишіть значення null;
 5) Виведіть на екран число елементів, яке зберігається в масиві;
 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
 7) Виведіть на екран п'ятий елемент масиву.
 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.*/
 console.log('\n task3:');

 const arr = [];
 arr[0]=1;
 arr[1]='hello';
 arr[2]='true';
 arr[3]=null;
 console.log(arr.length);
 arr[4] = prompt('arr[4]', "enter data");
 console.log(arr[4]);
 arr.shift();
 console.log(arr);

 // ------------------------------------task4-----------------------------------------------------
 /*Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
Початковий масив:
let cities = ["Rome", "Lviv", "Warsaw"]; 
Результуючий масив:
"Rome*Lviv*Warsaw"
*/
 console.log('\n task4:');
 let cities = ["Rome", "Lviv", "Warsaw"];
 let text = '';
 let res = [];
 cities.forEach(function(item, i, cities) {
    if(i<(cities.length-1))
    {
    text=text+item+"*";
    }
    else
    text=text+item;
  });
  alert(text);
  res[0]=text;
  console.log(res);

// ------------------------------------task5-----------------------------------------------------
 /*Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. 
 Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення
про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. 
Якщо вік менше 10 років вивести “Ви ще надто молоді”*/

console.log('\n task5:');

const isAdult = prompt('How old are you?', "10");
if ((isAdult>=18)&&(isAdult<122)){
    console.log("You have reached the age of majority")}
else
if(((isAdult)<10)&&(isAdult>0)){
    console.log("You are too young");
}
else
if(((isAdult)>=10)&&(isAdult<18)){
    console.log("You are a teenager");
}
else
    console.log("data error, enter the correct age");

    // ------------------------------------task6-----------------------------------------------------
 /*Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
	a) визначити і вивести в консоль площу трикутника 
	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘.
Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).*/

console.log('\n task6:');

let a = parseFloat(prompt('enter the size of the first side of the triangle:', "10"));
let b = parseFloat(prompt('enter the size of the other side of the triangle:', "11"));
let c = parseFloat(prompt('enter the size of the third side of the triangle:', "12"));
let p = 0;
let IsTriangle = false;

//Write the Heron's formula used to calculate the area of a triangle whose side are a,b and c:

if ( ( a > 0 ) && ( b > 0 ) && ( c > 0) && ( a + b > c ) && ( b + c > a ) && ( a + c > b ) ){
    p = (a + b + c)*0.5;
    var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    //console.log('P=' + p);
    console.log('S=' + s.toFixed(3));
    IsTriangle = true;
    }
else {
    console.log('Error input data');
    IsTriangle = false;
     }
    
//checking the triangle for a rectangle by the Pythagorean theorem:

if (IsTriangle && ( ( (a**2) == (b**2 + c**2) ) || ( (b**2) == (a**2 + c**2) ) || ( (c**2) == (a**2 + b**2) ) ) ){
    console.log('right triangle');
   }
else
    {console.log('not a right triangle or not triangle');}

 // ------------------------------------task7-----------------------------------------------------
 /*Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
 Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.*/

console.log('\n task7, method1:');

let date = new Date();
let timeNow = parseInt(date.getHours());
console.log('time:'+timeNow);
timeNow=10;
if ((timeNow < 5) || timeNow >= 23){
    console.log("Good night");
}
else
    if ((timeNow < 11) && timeNow >= 5){
        console.log("Good morning");
    }
    else
        if ((timeNow < 17) && timeNow >= 11){
            console.log("Good day");
        }
        else
            if ((timeNow < 23) && timeNow >= 17){
                console.log("Good evening");
            }
            else console.log("Hi");

console.log('\n task7, method2:');

    switch (true) {
    case ((timeNow < 5) || timeNow >= 23):
        console.log("Good night");
        break;
    case ((timeNow < 11) && timeNow >= 5):
        console.log("Good morning");
        break;
    case ((timeNow < 17) && timeNow >= 11):
        console.log("Good day");
        break;
    case ((timeNow < 23) && timeNow >= 17):
        console.log("Good evening");
    break;
    default:
        console.log("Hi");
}