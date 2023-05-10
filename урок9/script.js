let soap= {

    ing1: 'potato',
    ing2: 'luc',
    ing3: 'meat',
    ing4: 'water',
    ing5: 'spagetti'
};
let eggs= {

    ing1: 'eggs',
    ing2: 'oil'
};
let buuzy={

    ing1: 'dough',
    ing2: 'minced meat'
};
let menu = [];

menu.push('buuzy (35min), 70rub za sht');
menu.push('eggs (10min), 100rub');
menu.push('soap (30min), 250rub ');

menu.pop();
delete soap.ing4;
menu.unshift('soap (35min), 250rub');


let cash = 'Cash =';
let info = (250+100+70)*365;

console.log(menu);
console.log(cash+info);