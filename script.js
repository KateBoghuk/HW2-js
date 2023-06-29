{
    let name = prompt('Имя');
let age = prompt('Возраст');
let city = prompt('Город проживания');
let phone = prompt('Телефон');
let email = prompt('email');
let company = prompt('Место работы');
document.write('Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.');
document.write('${name} родился в ${2023 - age} году.');
}

{
let str = ('Введите 6 цифр без пробелов');
let c1 = number(str[1]) + number(str[2]) + number(str[3]);
let c2 = number(str[0]) + number(str[3]) + number(str[3]);
if (c1==c2){
    console.log('true');

}
else{
    console.log('false');
}
}

{
let a =('Введите переменную');
if (a>0){
    console.log('true');
}
else{
    console.log('false');
}
}

{
    let a = 10;
    let b = 2;
    console.log('Сумма = ' + (a + b));
    console.log('Разность = ' + (a - b));
    console.log('Произведение = ' + (a * b));
    console.log('Частное = ' + (a / b));
}

{
    let days = prompt('Введите количество дней');
    let years = parseInt(days / 365);
    days = days % 365;
    let months = parseInt (days / 31);
    days = days % 31;
    let weeks = parseInt(days / 7);
    days = days % 7;
    let hours = days * 24;
    let minuts = hours * 60;
    let seconds = minuts * 60;
    
    document.write('<span>Количество лет: ${years}</span><br/><span>Количество месяцев: ${months}</span><br/><span>Количество недель: ${weeks}</span><br/><span>Количество дней: ${days}</span><br/><span>Количество часов: ${hours}</span><br/><span>Количество минут: ${minuts}</span><br/<span>Секунд: ${seconds}</span><br/>')
}

{
    let day = prompt('Любой день года');
    let month = 0;
    if (day>0 & day<=31)
    {
        console.log('Январь');
        month = 1;
    }
    else
    if (day>31 & day<=59)
    {
        console.log('Февраль');
        month = 2;
    }
    else
    if (day>59 & day<=90)
    {
        console.log('Март');
        month = 3;
    }
    else
    if (day>90 & day<=120)
    {
        console.log('Апрель');
        month = 4;
    }
    else
    if (day>120 & day<=151)
    {
        console.log('Май');
        month = 5;
    } 
    else 
    if (day>151 & day<=181)
    {
        console.log('Июнь');
        month = 6;
    } 
    else 
    if (day>181 & day<=212)
    {
        console.log('Июль');
        month = 7;
    } 
    else 
    if (day>212 & day<=243)
    {
        console.log('Август');
        month = 8;
    } 
    else 
    if (day>243 & day<=273)
    {
    console.log('Сентябрь');
    month = 9; 
    } 
    else 
    if (day>273 & day<=304) 
    {
        console.log('Октябрь');
        month = 10;
    } 
    else 
    if (day>304 & day<=334)
    {
        console.log('Ноябрь');
        month = 11;
    } 
    else 
    if (day>334 & day<=365)
    {
        console.log('Декабрь');
        month = 12;
    };
    switch (month){
        case 1:
            console.log('Зима')
            break;
        case 2:
            console.log('Зима')
            break;
        case 3:
            console.log('Весна')
            break;
        case 4:
            console.log('Весна')
            break;
        case 5:
            console.log('Весна')
            break;
        case 6:
            console.log('Лето')
            break;
        case 7:
            console.log('Лето')
            break;
        case 8:
            console.log('Лето')
            break;
        case 9:
            console.log('Осень')
            break;
        case 10:
            console.log('Осень')
            break;
        case 11:
            console.log('Осень')
            break;
        case 12:
            console.log('Зима')
            break;
    }
}
