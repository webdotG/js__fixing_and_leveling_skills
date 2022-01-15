const globalVariable =  ('/global') // глобальная переменная

const header = document.getElementById('.header')
console.log(typeof header);

const navItem = document.querySelectorAll('.navigation__item');
console.log(navItem);

function simpleFunction(){
	let message = "test local variable" + globalVariable;// локальная переменная используется только внутри этой функции
	console.log(message);
}
simpleFunction(); //вызов функции

function simpleCalc(){
	let result = 1 + 2 + '/number and words';
	console.log(result);
}
simpleCalc();

function simpleFunctionSeconde( a, b, c ){ //обозначаю параметры для функции
	let result = a + b - c; //что-то делаю с этими параметрами
	console.log(result);
	return result; //что бы использовать значение локальной переменной не только внутри этой функции а глобально
}
simpleFunctionSeconde(100, 50, 25); // задаю значения параметрам с которыми будет производиться действие описанное выше
let sum = simpleFunctionSeconde(100, 50, 25); //после RETURN могу заносить значение функции в глобальные переменные
console.log(sum)