

 
 // ------------------------------------task1-----------------------------------------------------
 console.log('task1:');
 /*1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад для об’єкта
let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
Результат має бути 3.
propsCount(mentor);  // 3
*/
/*let mentor = { 
    course: "JS fundamental",   
    duration: 3,
    direction: "web-development" 
};
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
console.log("propsCount(mentor): " + propsCount(mentor));
*/
 
  // ------------------------------------task2-----------------------------------------------------
  console.log('\n task2:');
 /*2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj),
 яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив 
 значень властивостей об’єкта.*/
 
 /*let obj = {
    name: "Oleg",
    age: 32,
    sex: "male",
    height: 193,
    weight: 91
 };

function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

showProps(obj);

 */
  // ------------------------------------task3-----------------------------------------------------
  console.log('\n task3:');
 /*3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься 
 метод showFullName(), який виводить ім’я і прізвище особи. 
	Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр 
    year (рік вступу до університету). 
	В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, 
    прізвище, але і по-батькові (midleName) студента. 
	Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента 
    (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і 
    року вступу до ВУЗу year.
	Приклад результату:
let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6*/
/*
class Person {
       constructor(name, surname) {            
            this.name = name;
            this.surname = surname;
    }
    showFullName() {            
              alert (this.name + this.surname);
           }
        
}

class Student extends Person {
    constructor(name, surname, year) {            
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {            
          alert (this.name + ' ' + this.surname + ' ' + midleName);
    }

    showCourse() {
    let date = new Date();
    let yearNow = date.getFullYear();
    return (yearNow-this.year);
    }

}

let oishyra = new Student('Oleg', 'Shyra', 2015);
oishyra.showFullName('Ivanovych');

if ((oishyra.showCourse()>0) && (oishyra.showCourse())<7) 
    console.log("Current course: " + oishyra.showCourse()); 
else
    console.log("Data error")
 */   
 // ------------------------------------task4-----------------------------------------------------
  console.log('\n task4:');
  /*4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName 
  (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
       1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. 
       Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
       2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його 
       як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). 
       Вивести значення зарплати з цим коефіцієнтом.
       3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
	4) Вивести значення зарплати з новим experience.
	5) Створити кілька екземплярів класу (працівників) з різними зарплатами. Посортувати зарплату працівників 
    із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value ………..


   */
class Worker {
    #experience = 1.2;   
    constructor(fullName, dayRate, workingDays) {            
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;             
    }
    
    showSalary() {            
        console.log(this.dayRate * this.workingDays);}

    showSalaryWithExperience() {
         console.log(this.dayRate * this.workingDays * this.#experience);}
    
    showSalaryWorker() {
             return (this.dayRate * this.workingDays * this.#experience);}

    get showExp() {
        return this.#experience;
    }
        
    set setExp(experiance) {
        this.#experience = experiance;
    }
    
    sortSalaries(arr) {
        let sortedSalary = arr.sort(function(a,b){
            return a.showSalaryWorker() - b.showSalaryWorker();
        })
    for (let i = 0; i < sortedSalary.length; i++) {
        console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWorker());
    }
    }
}

let worker1 = new Worker("John Johnson", 20, 23, 0);

console.log(worker1.fullName); 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.salary = worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.salary = worker1.showSalaryWithExperience();


let worker2 = new Worker("Tim Tomson", 48, 22, 0);
console.log(worker2.fullName); 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.salary = worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.salary = worker2.showSalaryWithExperience();

let worker3 = new Worker("Bill Billson", 40, 26, 0);
console.log(worker3.fullName); 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.salary = worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.salary = worker3.showSalaryWithExperience();

let worker4 = new Worker("Jack Jackson", 38, 18, 0);
console.log(worker4.fullName); 
worker4.showSalary();
console.log("New experience: " + worker4.showExp);
worker4.salary = worker4.showSalaryWithExperience();
worker4.setExp = 1.5;
console.log("New experience: " + worker4.showExp);
worker4.salary = worker4.showSalaryWithExperience();

let arr = [worker1, worker2, worker3, worker4];
worker4.sortSalaries(arr);

  

/*
Example usage:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
. . . . . .

let worker3 = new Worker("Andy Ander", 29, 23);
. . . . . .

Output example:
John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690

Tom Tomson
Tom Tomson salary: 1056
. . . . . .

Sorted salary:
John Johnson: 690
Andy Ander: 1000.5
Tom Tomson: 1584

*/
 // ------------------------------------task5-----------------------------------------------------
 console.log('\n task5:');
 /*5. Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі 
 getArea() та метод toString() для виведення назви класу.
Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. 
Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури.
 В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, 
 наприклад для кола - радіус r.
	Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів
     figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, 
     виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну 
     площу всіх фігур. Для реалізації функції можете використати метод reduce().
	 class GeometricFigure {
			getArea() {
	return 0;
}
toString() {
     return Object.getPrototypeOf(this).constructor.name;
}
     }*/
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure {
    constructor(h, a)  {
        super();
        this.height = h;
        this.basis = a;        
    }
    getArea() {
        return this.height * this.basis / 2;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.side = a;
    }
    getArea(){
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(r){
        super();
        this.rad = r;
    }
    getArea() {
        return Math.PI * this.rad * this.rad;
    }
}

function handleFigures(figures) {
    return figures.reduce(function(sum, figure){
        if (figure instanceof GeometricFigure){
            console.log( `Geometric figure: ${figure.toString()} with area: ${figure.getArea()}`);
            return sum + figure.getArea();
        }
        throw Error("Argument errror");
    }, 0);
}
	
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log("Total area:" + handleFigures(figures));


/*
Приклад результату:
	Geometric figure: Triangle - area: 10
Geometric figure: Square - area: 49
Geometric figure: Circle - area: 78.53981633974483
137.53981633974485 // total area
 */
 
 
  
 