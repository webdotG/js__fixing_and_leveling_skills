const globalVariable =  ('/global') // глобальная переменная

const header = document.querySelector('.header')
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


//                                                события

window.addEventListener('scroll', function(){
		console.log('scroll page');
		let scrollPosition = window.scrollY;   
		//	let scrollPosition = window.pageYOffset;    или можно таким образом узнать позицию скролла
		
		if(scrollPosition > 0){
			header.classList.add('back--transparent');    //если позиция скролла больше 0 то добавляю класс
		} else {
			header.classList.remove('back--transparent'); //в противном случае удаляю класс
		}

		console.log(scrollPosition)                     //чтобы вывести позицию скролла 
		header.classList.add('position');               //при скролле добавляю класс
});

//--------------------------------как сохранить повещеный класс если страница обновилась на половине просмотра
//--------------------------------по сути скролла нет после перезагрузки тогда пропадет класс
//--------------------------------надо проверить в каком месте DOCUMENT я нахожусь
document.addEventListener('DOMcontentLoaded', function(){
	let scrollPosition = window.scrollY;   
	if(scrollPosition > 0){
		header.classList.add('back--transparent');    
	} else {
		header.classList.remove('back--transparent'); 
	}
});

const tabBtn = document.querySelectorAll('#test-btn');
//tabBtn.addEventListener('click', function() {          НЕЛЬЗЯ взять и так просто повесить обработчик событий на все кнопки разом
//	console.log('clicked');
//});
//-------------------------------------------- а вот так МОЖНО
for(let allBtn of tabBtn){										//в цикл for создаю новую переменную со значением tabBtn в значение которой я записал все кнопки
	allBtn.addEventListener('click', function() {      //и вот теперь могу повесить отлов события    
		console.log(allBtn.textContent);	
})
}
