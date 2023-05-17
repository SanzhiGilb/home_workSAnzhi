let bludo1={
    ArraySoap: ['potato','meat','carrot','macaron','onion'],
    time: 40,
    price: 350
};

let bludo2={
    ArrayEggs: ['eggs','oil','onion'],
    time: 15,
    price: 150
};

let bludo3={
    Arraybuuzy: ['dough','minced-meat'],
    time: 35,
    price: 70
};
// Вывод на экран
/*document.write("<h3>Блюда</h3>");
for(let i=0; i< bludo1.ArraySoap.length; i++)
document.write(bludo1.ArraySoap[i] + "<br/>");*/

// Массив из блюд
let menu= ['bludo1','bludo2','bludo3'];

// Удаление блюда из массива
menu.pop();

// Возвращение уд.блюда, нл вперед и удаление одного ингредиента
menu.unshift(bludo3);
bludo3.Arraybuuzy.pop();

// Рассчет сколько заработаю на блюдах
bludo1.price *365;
bludo2.price *365;
bludo3.price *365;

// Вывод на сайт
document.write("<h3>МЕНЮ</h3>");
for(let i=0; i< menu.length; i++)
document.write(menu[i]+ "<br/>");
