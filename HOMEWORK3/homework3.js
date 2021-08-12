 // ------------------------------------task1-----------------------------------------------------
console.log('task1:');
/*1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів
цього масиву. Також реалізуйте завдання через while.*/

 const array = [2,3,4,5];
 let product_for = 1;
 let product_while = 1;

 for (let index = 0; index < array.length; index++) {
     product_for = product_for * array[index];     
 }
 console.log('product for=' + product_for);

 let i = 0;
 while (i < array.length) 
 {
     product_while=product_while * array[i];
i++;
}
 console.log('product while=' + product_while);

 // ------------------------------------task2-----------------------------------------------------
 console.log('\n task2:');
/*2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, 
чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even" */

const max = 15;
for (let index = 0; index <= max; index++) {
    product_for = product_for * array[index]
    if (index % 2 == 0) {
        console.log("the number:" + index + " is even"); 
    }
    else
    console.log("the number:" + index + " is odd");   
}

 // ------------------------------------task3-----------------------------------------------------
 console.log('\n task3:');
/*3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
Випадкові числа генеруються із діапазону 1-500.
Sample Output:
randArray(5);  // 399,310,232,379,40
 */

let k = prompt('enter an array length of 2 to 1000, k =:', "10");

function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  let randArray = new Array();

if ((k <= 1000) && (k>=2)) {
    for (let i = 0; i < k; i++) {
        randArray[i] = random(1, 500);
    }
    console.log('\n randomArray:' + randArray);
}
else
    alert("input data is incorrect");

// ------------------------------------task4-----------------------------------------------------
 console.log('\n task4:');
 /*4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b.
 Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.
Sample Output:
raiseToDegree(3, 4);  // 81
  */
alert("a**b:");
let a = prompt('enter an integer number a', "10");
let b = prompt('enter an integer number b', "2");

function raiseToDegree(a, b) {
   let result;
    if((a ^ 0) == a && a != '')     {
        result = Math.pow (a, b);
    }
    else
        result = ("data error");
        //console.log (":"+ (a^0)+(b^0));
       
    return result;
  }


console.log("result=" + raiseToDegree(a,b));

// ------------------------------------task5-----------------------------------------------------
console.log('\n task5:');
/*5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той,
який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4
*/

function findMin()
{
let min = arguments[0];
for (let i = 0; i < arguments.length; i++) {
    if (min > arguments[i]) 
    {min = arguments[i];}
}
return min;
}
console.log("Min" + findMin(12, 14, 4, -4, 0.2));


    

// ------------------------------------task6-----------------------------------------------------
console.log('\n task6:');
/* 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/

function isUnique(arr) {
    let result = [];
  let f = false;
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    for (let i=0; i<arr.length;i++) {
        if (arr[i]==result[i]) {
          f=true;
        }
        else{
        f=false;
        break;
        }
      }
  console.log('res'+result);
  console.log('arr'+arr);
  return f;
}
  
  let strings = ["1", "2", "3", "5", "5", "6", "7", "8", "9" ];
  
  alert( isUnique(strings) ); // кришна, харе, :-O


// ------------------------------------task7-----------------------------------------------------
console.log('\n task7:');
/*7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив,
2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.
Sample Output:
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]*/
let arr = [20, 11, 7, 23, 44, 58, 3, 4, 10, -5];
console.log("Number array:" + arr);
let x = parseInt(prompt('Specify the number of latest array elements to be displayed:', 1));

if (isNaN(x)||(x>arr.length)){
console.log("Error data")}
else{
console.log("Last ell" + lastElArray(arr,x));}

function lastElArray(arr, n) {
    const lastEl = arr.slice(-n);
    return('last'+n+'elements:'+lastEl);
}







// ------------------------------------task8-----------------------------------------------------
console.log('\n task8:');
/*8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.
Input string: 'i love java script' 
Output string: 'I Love Java Script'
*/

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("i love java script") );


/*let str = prompt('vvedit ryadok:', "i love java script");

function ToUpper(str) {
    let arr = str.split(" ");
    for (let i=0; i<arr.length; i++)
    {
        if (arr[i].charAt(0).ToUpperCase() + arr[i].slice(1);
    }
        {a[i+1].ToUpper}
    };
    return s;
   }
 
console.log("ToUpper(a)=" + ToUpper(s));

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("вася") ); // Вася

 */


 
