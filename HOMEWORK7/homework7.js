

 
 // ------------------------------------task1-----------------------------------------------------
 console.log('task1:');
 /*1. За допомогою методів об’єкта window створити:
	1) нове вікно розміром 300х300 пікселів.
	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
	4) із затримкою 2 сек закрийте вікно.*/

 /*let nWindow = window.open("", "", "width = 300, height = 300");
 
 setTimeout(function(){
     nWindow.resizeTo(500, 500);
 }, 2000);

 setTimeout(function(){
    nWindow.moveTo(200, 200);
}, 4000);
 
setTimeout(function(){
    nWindow.close();
}, 6000);
 */
  // ------------------------------------task2-----------------------------------------------------
  console.log('\n task2:');
 /*2. Для заданої HTML-сторінки:

<p id ='text'>I learning JavaScript events!</p> 
<div>
	<button . . . . . >Change style!</button>
</div>

напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS".*/

let btnChange = document.getElementsByTagName("button")[0].onclick = changeCSS;
function changeCSS(){
    let pText = document.getElementById("text");
    pText.style.fontFamily = "Comic Sans MS";
    pText.style.color = "orange";
    pText.style.fontSize = "20pt";
}
 
  // ------------------------------------task3-----------------------------------------------------
  console.log('\n task3:');
 /*3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з 
 відповідними подіями на кожному елементові:
	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. 
    При відпусканні – білий.
	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
	Приклад – курсор наведений на лінку.*/


/*function setBackground(color) {
    document.body.style.backgroundColor = color;
}*/

 // ------------------------------------task4-----------------------------------------------------
  console.log('\n task4:');
 /*4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
 Можуть видалятися всі елементи в будь-якому порядку.*/
 /*myBtn.addEventListener("click", deleteElement);
 function deleteElement()
 {
        let el = document.getElementById("nameSet");
        el.remove(el.selectedIndex);
 }*/
 // ------------------------------------task5-----------------------------------------------------
 console.log('\n task5:');
 /*5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні 
курсора миші виводитиме повідомлення "Mouse is not on me!".
 */
/*let elem = document.getElementById("liveButton");
elem.addEventListener("click", mouseClickFunc);
elem.addEventListener("mouseover", mouseOverFunc);
elem.addEventListener("mouseout", mouseOutFunc);
function mouseClickFunc() {
    document.getElementById("Id").innerHTML += "I was pressed!<br>";
}
function mouseOverFunc() {
     document.getElementById("Id").innerHTML += "Mouse on me!<br>";
}
function mouseOutFunc() {
    document.getElementById("Id").innerHTML += "Mouse is not on me!<br>";
}
*/
 // ------------------------------------task6-----------------------------------------------------
 console.log('\n task6:');
 /*6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і 
 виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.*/


 /*function winSize(){
     let width = window.innerWidth;
     let height = window.innerHeight;
     let wSize = "Width: " + width + ", Height:" + height;
     document.getElementById("id").innerHTML = wSize;
 }
 window.addEventListener("resize", winSize);
 */
 // ------------------------------------task7-----------------------------------------------------
 console.log('\n task7:');
 /*7. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому
  – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна
   країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно,
    через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
    Код HTML-сторінки:
<select name="country" id="country">
	<option value="ger">Germany</option>
	<option value="usa">USA</option>
	<option value="ukr">Ukraine</option>
</select>
                    
<select name="cities" id="cities"></select>
<p></p>*/
 

/*const cityArr = {
      "ger": ["Berlin", "Hamburg", "Dortmund"],
      "usa": ["New-York", "Washington", "Boston"],
      "ukr": ["Kyiv", "Lviv", "Harkiv"],
  }
 
 let prime_select = document.getElementById("country");
 prime_select.addEventListener("change", func);
 prime_select.addEventListener("change", toParagraph);

 let city_select = document.getElementById("cities");
 city_select.addEventListener("change", toParagraph);
 
 function func(){
     city_select.innerHTML = "";
     let selected_country = prime_select.value;
     for (let i = 0; i<cityArr[selected_country].length; i++){
         let new_option = document.createElement("option");
         new_option.innerHTML = cityArr[selected_country][i];
         city_select.append(new_option);
     }
 }

 let parag = document.querySelector("p");

 function toParagraph(){
     parag.innerHTML = "";
     parag.innerHTML = prime_select.options[prime_select.selectedIndex].text + "," + city_select.options[city_select.selectedIndex].text;

 }
 */ 
 
 
 
 
 
 // ------------------------------------end-----------------------------------------------------
 