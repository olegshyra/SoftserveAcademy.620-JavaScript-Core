 // ------------------------------------task6-----------------------------------------------------
 console.log('\n task6:');
 /*6. Задано HTML-сторінку:
   <body>
<input type="text" id="input1" value="Text1">
<input type="text" id="input2" value="Text2">
 </body>
⦁	Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
⦁	Поміняти значення 1-го і 2-го інпутів місцями.

 */
let text1 = prompt("text1", "text1");
let text2 = prompt("text2", "text2");
let text3 = text1;

document.getElementById("input1").setAttribute('value', text2);
document.getElementById("input2").setAttribute('value', text3);



