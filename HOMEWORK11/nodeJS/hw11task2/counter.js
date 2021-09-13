 // ------------------------------------task2-----------------------------------------------------
let sayHello = require('./personalmodule.js');
console.log('task1:');
 /*1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку,
 що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати 
    модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).*/
const http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  const os = require('os');
  const path = require('path');
 response.end(sayHello());
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');

 // ------------------------------------task2-----------------------------------------------------
 /*2. Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює 
 з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля 
 на зовні можна використати об’єкт module.exports. 
Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

*/
console.log('\n task2 :');