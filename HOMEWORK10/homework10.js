// ------------------------------------task1-----------------------------------------------------
/*1. 
Вихідний код:
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [// Ваш код ] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]
Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.
*/
console.log('task1:');

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, i, ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// ------------------------------------task2-----------------------------------------------------

/*2. 
Вихідний код:
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let // Ваш код  = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
	Допишіть код використовуючи деструктурування, щоб в консолі браузера з'явилися рядки, які написані в коментарях.

*/
console.log('\n task2:');
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26]
 };
 let {names: [name1, name2, name3, name4],
     ages: [age1, age2, age3, age4]  } = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26
 
 // ------------------------------------task3-----------------------------------------------------
 /*3. Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
	Якщо параметри типу Number відсутні, повертає число 0.
function mul() {
   // Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
Не можна використовувати властивість arguments, але в функцію mul() можна додати один параметр.
*/
 console.log('\n task3:');
 function mul(...keys) {
   let result = 1;
   let isEmptyNumber = false;

   for (let i = 0, len = keys.length; i < len; i++) {
      if (isNaN(parseInt(keys[i]))) {
         console.log(keys[i] + " - NaN");
         
       }   
       else{
         console.log(keys[i] + " - number");
         result = result * keys[i];
         isEmptyNumber = true;
       }   
   }
   if (isEmptyNumber == false) {
      result = 0;
   }
   return result;
}
console.log('mul = ' + mul(1, "str", 2, 3, true)); // 6
console.log('mul = ' + mul(null, "str", false, true)); // 0
 // ------------------------------------task4-----------------------------------------------------
 /*4. 
Вихідний код:
let server = {
   data: 0,
   convertToString: function (callback) {
      callback((function () {
         return this.data + "";
      }).bind(this));
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
   notification: function () {
      return (function (callback) {
         this.result = callback();
      }).bind(this);
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().
*/
 console.log('\n task4:');

 let server = {
   data: 0,
   convertToString: function (callback) {
      callback(() => {
         return this.data + "";
      });
   }
};
let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
   },
  notification: function () {
      return (callback => {
         this.result = callback();
      });
   }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


// ------------------------------------task5-----------------------------------------------------
 /*5. Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. 
Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого
масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
Приклади використання функції:
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
	console.log(map.get(2)); // "span"
*/


console.log('\n task5:');

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keys, values){
   const map	= new Map();
   for (let i = 0; i < keys.length; i++){
      map.set(keys[i], values[i]);
   }
   return map;
}
let map = mapBuilder(keys, values);

console.log(map.size);
console.log(map.get(1));
console.log(map.get(2));
console.log(map.get(3));
console.log(map.get(4));

