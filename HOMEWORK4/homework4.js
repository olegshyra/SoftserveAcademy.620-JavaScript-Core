// ------------------------------------task1-----------------------------------------------------
console.log('task1:');
/*1. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width і 
висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і
генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.*/

let width = parseFloat(prompt('enter the width of the rectangle:', "1"));
let height = parseFloat(prompt('enter the height of the rectangle:', "1"));

function  rectangleArea(width, height) {
    if ((isNaN(width)) || (isNaN(height)))
        throw new Error("non-numeric parameters are entered")
    else
        if ((width <= 0) || (height<= 0))
            throw new Error("the sides of a triangle must be positive numbers")
        else
            return width*height;    
  }
  
console.log('S='+rectangleArea(width,height));  
 
// ------------------------------------task2-----------------------------------------------------
console.log('\n task2:');
/*2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному
вікні помилки у випадку, коли: 
	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
	- нечислове значення
	- вік юзера менше 14 років. 
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки.*/
function checkAge() {
let age, res;
let url = new URL('https://www.youtube.com/watch?v=J6pN-6wxeu4&ab_channel=OlehIvaniuk');
while (true) {
  age = prompt("How old are you?", '20');
 // break;

  try {
    //res = eval(age);
    if (isNaN(age)) {
      throw new Error("non-numeric parameters are entered");}
    else {
        if (age == 0) {
            throw new Error("The field is empty! Please enter your age");}
        else {
                if ((age < 14) && (age > 0)) {
                    throw new Error("You are too young");
                }
                else {
                    alert('you have access to watch the video, follow the link or view in the pop-up window::' + url);
                    window.open(url);
                    break;
                }
            }
        }
  } catch (e) {
    alert( "Error: " + e.message + ", Enter data again" );
  }
}
}
let result = checkAge(); 
console.log(result);

// ------------------------------------task3-----------------------------------------------------
console.log('\n task3:');
/*3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле
name значенням 'MonthException'.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу
кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
	Приклад роботи програми:
> console.log(showMonthName(5)); 
May
> console.log(showMonthName(14)); 
MonthException Incorrect month number*/


// ------------------------------------task4-----------------------------------------------------
console.log('\n task4:');
/*4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт,
який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі
виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів,
 де значеннями ключів є коректні елементи ids.

	Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} */
 