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

let newMain = document.createElement("main");
newMain.className = "mainClass check item";
document.body.append(newMain);
let newDiv = document.createElement("div");
newDiv.id = "myDiv";
newMain.append(newDiv);
let newP = document.createElement("p");
newP.innerHTML = "First paragraph";
newDiv.append(newP);
