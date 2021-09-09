// ------------------------------------task4-----------------------------------------------------
console.log('\n task4:');
/*let elementsFirst = document.querySelectorAll('ul > li:first-child');
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

let elementsParent = document.getElementById("list");
let elementFirst = elementsParent.childNodes[0].innerHTML;
alert(elementFirst);
let elementLast = elementsParent.childNodes[4].innerHTML;
alert(elementLast);
let elementSecond = elementsParent.childNodes[1].innerHTML;
alert(elementSecond);
let elementFourth = elementsParent.childNodes[3].innerHTML;
alert(elementFourth);
let elementThird = elementsParent.childNodes[2].innerHTML;
alert(elementThird);*/
// ------------------------------------task5-----------------------------------------------------
console.log('\n task5:');
document.body.children[0].style.backgroundColor = "#00FF00";
document.getElementById("myDiv").children[0].style.fontWeight = "400";
document.getElementById("myDiv").children[1].style.color = "#FF0000";
document.getElementById("myDiv").children[2].style.textDecoration = "underline";
document.getElementById("myDiv").children[3].style.fontStyle = "italic";
document.getElementById("myList").style.display = "flex";
document.getElementById("myList").style.listStyle = "none"
document.getElementsByTagName("span")[0].style.display = "none";

