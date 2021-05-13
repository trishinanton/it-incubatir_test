var searchButton = document.getElementById('js_search-button'); 
var searchInput = document.getElementById('js_input'); 

var searchButtonThree = document.getElementById('js_search-button_three'); 
var searchInputThree = document.getElementById('js_input_three'); 

/* 3, 4 Задание */
arrObj = [{name: 'Anton',age:20},{name: 'Dima',age:25},{name: 'Lena',age:30}]
var showFirstProperty = arrObj[0].name;

searchButton.addEventListener('click', onButton);

function onButton(){
    let showValue= searchInput.value;
    if (showValue==='') alert ("Введите что-нибудь в поисковую строку и нажмите 'Найти'")
    else{
        if (showValue==='google') alert('Yandex круче. Но это не точно');
    else alert(showValue);
    alert (showFirstProperty);
    }
    
}



/* 10 Задание */
searchButtonThree.addEventListener('click', onButtonThree);

function onButtonThree(){
    let showValue= searchInputThree.value;
    if (showValue==='') alert ("Введите что-нибудь в поисковую строку и нажмите 'Найти'")
    else{
         setTimeout(function (){
            if (showValue==='google') alert('Yandex круче. Но это не точно');
                else alert(showValue);
    },3000)
    }
   
}



/* 6. Задание */
function superSum(fistPar, secondPar){
    let showSum = fistPar+secondPar;
    alert('Сумма двух чисел: '+showSum);
}
superSum(-4,2);

/* 7. Задание */
var arrOfNum = [-2,-10,1,8];

function getMaxValue(arrOfNum){
    var max = arrOfNum[0];
    for (let i=0; i<arrOfNum.length; i++){
        if (arrOfNum[i]>max) max=arrOfNum[i];
    }
    return max;
}
console.log ('Максимальное значение: ',getMaxValue(arrOfNum));

function getMinValue(arrOfNum){
    var min = arrOfNum[0];
    for (let i=0; i<arrOfNum.length; i++){
        if (arrOfNum[i]<min) min=arrOfNum[i];
    }
    return min;
}
console.log ('Минимальное значение: ',getMinValue(arrOfNum));


/* 8. Задание */
/* First way */
var a = 1;
var b = 2;
var tmp = a;
a=b;
b=tmp;

console.log('Первый способ: ',a,b); 

/* Second way */
var c = 10;
var d = 20;

d = [c,c=d][0];
console.log('Второй способ: ',c,d);


/* 9. Задание */
var arr = [2,3,5,7];

function MaxValue(arr){
    var max = arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i]>max) max=arr[i];
    }
    return max;
}
console.log ('Получение максимального значения(Задание 9): ',MaxValue(arr));

