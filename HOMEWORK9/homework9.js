// ------------------------------------task1-----------------------------------------------------
console.log('task1:');
/*1. На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://,
потрібно додати посиланню атрибут target="_blank".*/
$("a[href^='https://']").attr("target", "_blank");

 // ------------------------------------task2-----------------------------------------------------
  console.log('\n task2:');
/*2. Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону,
потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
.	<h2 class="head">header1</h2>
    <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
    <h2>header3</h2>
    <h2 class="head">header4<span>inner elem2</span></h2>
    <h2>header5</h2>
*/
$("h2.head").css({ "background-color": "green"});
$("h2.head>.inner").css({ "font-size": "35px"}); 

  // ------------------------------------task3-----------------------------------------------------
  console.log('\n task3:');
/*3. Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так,
щоб він став безпосередньо над <h3>.
   <h3>header1</h3>
   <div>text1</div>
   <h3>header2</h3>
   <div>text2</div>
*/
        $('h3+div').each(function() {
            el = $(this).prev();
            let copy_from = $(this).clone(true);   
            $(el).replaceWith(copy_from);
            let copy_to = $(el).clone(true);        
            $(this).replaceWith(copy_to);
        });

// ------------------------------------task4-----------------------------------------------------
  console.log('\n task4:');
/*4. На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив 
будь-які 3 чекбокси, всі чекбокси робить неактивними.
*/
$(":checkbox[name='1b']").change(function(){
    if ($(":checkbox[name='1b']:checked").length == 3)                                              
     $(':checkbox:not(:checked)').prop('disabled', true);  
    else                                                     
     $(':checkbox:not(:checked)').prop('disabled', false); 
  });
 