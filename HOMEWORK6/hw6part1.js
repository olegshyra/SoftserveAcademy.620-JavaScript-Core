

 
 // ------------------------------------task1-----------------------------------------------------
 console.log('task1:');
 /*1. На HTML-сторінці є елемент div:
    <body>	
	
  </body>	
Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.	

*/

//<div id="test">First</div>

//the first way:
document.getElementById("test").innerHTML = "Last1"; 

//the second way:
let blocksDiv = document.getElementsByTagName( "div");
blocksDiv[0].innerHTML = "Last2";

 
  // ------------------------------------task2-----------------------------------------------------
  console.log('\n task2:');
 /*2. На сторінці є елемент зображення:
     <body>
		   <img class="image" src="dog.jpg">
     </body>
Потрібно змінити зображення dog.jpg на cat.jpg.
Виведіть в модальному вікні вміст тегу img з новим зображенням.
*/
document.getElementsByClassName("image").src="cat.jpg";
let img = document.getElementsByClassName("image").src;
alert("Image: "+img);
 
 
  // ------------------------------------task3-----------------------------------------------------
  console.log('\n task3:');
 /*3. 
       <body>
	<h2>Article header</h2>      
      <div id="text">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </div>
	<p>Another text</p>
    </body>
На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll). 
І вивести їх вміст із вказанням номеру абзацу в такому форматі:
Selector text 0: First paragraph
Selector text 1: Second paragraph
Selector text 2: Third paragraph
*/
let elements = document.querySelectorAll('div p');
let i = 0;
  for (let elem of elements) {
    alert("Selector text " + i + ": " + elem.innerHTML);
    i++;
  }


 // ------------------------------------task4-----------------------------------------------------
  console.log('\n task4:');
  /*4. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
	1) першого елемента списку
	2) останнього елемента списку
	3) другого елемента списку
	4) четвертого елемента списку
	5) третього елемента списку
Зробіть завдання 2 різними способами.	
Приклад:
⦁	1
⦁	2
⦁	3
⦁	4
⦁	5
Результат виводу: 1, 5, 2, 4, 3
   */
let elementsFirst = document.querySelectorAll('ul > li:first-child');
for (let elemLi of elementsFirst) {
    alert(elemLi.innerHTML); 
  }

let elementsLast = document.querySelectorAll('ul > li:last-child');
for (let elemLi of elementsLast) {
    alert(elemLi.innerHTML); 
  }

let elementsSecond = document.querySelectorAll('ul > li:nth-child(2)');
for (let elemLi of elementsSecond) {
    alert(elemLi.innerHTML); 
}

let elementsForth = document.querySelectorAll('ul > li:nth-child(4)');
for (let elemLi of elementsForth) {
    alert(elemLi.innerHTML); 
}

let elementsThird = document.querySelectorAll('ul > li:nth-child(3)');
for (let elemLi of elementsThird) {
    alert(elemLi.innerHTML); 
}

let el1 = document.getElementById("1").innerHTML;
alert(el1);
let el2 = document.getElementById("5").innerHTML;
alert(el2);
let el3 = document.getElementById("2").innerHTML;
alert(el3);
let el4 = document.getElementById("4").innerHTML;
alert(el4);
let el5 = document.getElementById("3").innerHTML;
alert(el5);




 
 
 
// ------------------------------------task7-----------------------------------------------------
console.log('\n task7:');
/*7. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
	 
		<body>
		  <main class="mainClass check item"> 	
		        <div id="myDiv">
           <p>First paragraph</p>           
         </div>
       </main> 
	    </body>


*/

 
  
 