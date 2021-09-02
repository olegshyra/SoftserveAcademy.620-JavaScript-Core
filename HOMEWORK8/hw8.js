/*1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
	Приклад роботи:
upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character 
String's starts with uppercase character
*/
//let strT1 = "regexp";
let strT1 = "RegExp";
function upperC(str){
    let regT1 = /^[A-Z]{1}/;
    if (regT1.test(str))
        alert("String's starts with uppercase character")
        else
        alert("String's not starts with uppercase character")
}

upperC(strT1);

    

 // ------------------------------------task2-----------------------------------------------------
  console.log('\n task2:');
 /*2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
	Приклад роботи:
checkEmail("Qmail2@gmail.com");
true
*/

function checkEmail(email){
    let reg= /(\S+)@(\S+)\.(\S+)/i;
    return reg.test(email);
  }
  
  alert(checkEmail('Qmail2@gmail.com')); 
 
  
  // ------------------------------------task3-----------------------------------------------------
  console.log('\n task3:');
  /*3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b,
  за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
	Приклад роботи:   
Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]
*/
strT3 = "cdbBdbsbz";
let myRe = /d{1}b+d{1}/i;
//let myRe1 = /b+/i;
//let myRe2 = /d{1}/i;
let myArray = strT3.match(myRe);
alert(myArray);


// ------------------------------------task4-----------------------------------------------------
  console.log('\n task4:');
  /*4. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
	Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”
*/

let regt4 = /([a-z]+)\s([a-z]+)/i; 
let str = "Java Script"; 
let str2 = str.replace(regt4, "$2, $1");
alert("input: " + str + "\n" + "output: " + str2.replace(',',''));
 
  // ------------------------------------task5-----------------------------------------------------
  console.log('\n task5:');
  /*5. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
  */
  function isCardNumber(num){
    let reg = /^\d[\d]{3}-[\d]{4}-[\d]{4}-[\d]{4}$/;
    return reg.test(num);
  }
  
  alert( isCardNumber('9876-9999-9999-9999') );
 
  // ------------------------------------task6-----------------------------------------------------
  console.log('\n task6:');
  /*6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
	Вимоги:
  Цифри (0-9).
  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
   Символ “-” не може повторюватися.

checkEmail('my_mail@gmail.com');
Email is correct!
checkEmail('#my_mail@gmail.com');
Email is not correct!
checkEmail('my_ma--il@gmail.com');
Email is not correct!
*/
function isEmail(email){
    let reg= /^[0-9a-zA-Z][0-9a-zA-Z_]*-?[0-9a-zA-Z_]*@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/i;
    return reg.test(email);
  }
  
  alert( isEmail('my_ma--il@gmail.com') ); 
 
  // ------------------------------------task7-----------------------------------------------------
  console.log('\n task7:');
  /*7. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, 
  що містить лише букви та цифри, номер не може бути першим. Функція має приймати рядок і знаходити усі
   числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
	Приклад роботи:
checkLogin('ee1.1ret3');
true 
1.1, 3

checkLogin('ee1*1ret3');
false 
1, 1, 3
*/
function checkLogin(login){
    let reg= /^[a-zA-Z][0-9a-zA-Z\.]{1,9}$/i;
    alert(login.match(/\d+\.\d+/g));
    return reg.test(login);
    //логін вірний, нюанс з крапкою (m.4, 4.g, 00.5, 0..6)
    //let reg = /^[0-9]*[.,]?[0-9]+$/
    

    //видалимо з логіна усі букви:
    //login = login.replace(/[a-zA-Z]/gi, '');
    
  }  
  alert(checkLogin('1.m1')); 
  alert( "0 1 12.345 7890".match(/\d+\.\d+/g) );
   // ------------------------------------task7-----------------------------------------------------
  console.log('\n task7:');
  

