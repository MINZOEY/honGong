function collectEggs(){
	//지역변수
	let totalEggs = 6;
	// console.log(totalEggs);
	// 6찍히나
}
	//여기서 콘솔을 찍으면 에러발생
	//왜? 함수 안에서 totalEggs가 선언되었고  함수 밖에서 호출하면 액세스 할 수 없는 변수이니까!

	//전역변수
let totalEggs = 0;
function collectEggs() {
	totalEggs = 6;
};
console.log(totalEggs);  //0
collectEggs();
console.log(totalEggs); //6


//예시
// 어떤 문장이 출력되는가?
const creature = "common sea dragon";
function scubaDive(){
	const creature = "spanish dancer"
	console.log(creature);
}
scubaDive();

// 정답은 "spanish dancer"
// const creature가 변수 선언이 같지만 다른 블록 범위 안에서 선언한 것이라 상관없다.
//여기서 블록은 함수를 제외하고 기본적으로는 중괄호가 있는 모든 곳을 가리킴


//코드 실행할 때 출력되는 두 값은?
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal)

//정답 : "Scorpionfish", 
//		"Blue-Ringed Octopus"



// 216. 렉시컬범위
function bankRobbery(){
	const heroes = ['a', 'b', 'c', 'd'];
	function cryForHelp(){
		function inside(){
			for(let hero of heroes){
				console.log(`please, help us, ${hero.toUpperCase()}`)
			}
		}
		inside();
	}
	cryForHelp();
}
// bankRobbery()를 호출하면 이제 please, help us a, b,c,d,가 한번씩 for문에 의해 콘솔에 찍힘
//부모 함수의 안에 중첩된 내부 함수는 해당 외부 함수의 범위에나 또는 범위 내에서 정의된 변수에 액세스 할 수 있다.
// 또한 중첨된 함수나 내부 함수는 상위 몇 레벨 위에 있든 상관없이 부모 함수나 조부모 함수 등이 액세스하는 동일한 항목에 액세스 할 수 있음


// 217. 함수 표현식
// function add(x, y) {
// 	return x + y;
// }
const add = function (x, y){
	return x + y;
}
add(3,4)
// 7

// 218. 고차 함수
function callTwice(func){
	func();
	func();
};
function callTenTimes(f){
	for(let i = 0; i <10; i++){
		f()
	}
};
function rollDie(){
	const roll = Math.floor(Math.random() * 6) + 1
	console.log(roll)
};

callTwice(rollDie);
callTenTimes(rollDie);


// 219. 반환 함수
function makeBetweenFunc(min, max){
	return function (num){
		return num >= min && num <= max;
	}
}
const testRange = function (num){
	return num >= 100 && num <= 200;
};
// 이렇게 함수를 만들어 놓고 호출 할 때 
const isChild = makeBetweenFunc(0, 18)
// isChild를 부르면 f(num) { return num >= min && num <= max;} 가 호출 되고
isChild(40) = false;
isChild(7) = true;
// 해당 num에 숫자를 기입시 조건에 맞는 값이 true, false로 나오게  됨

// 220. 메서드(method) 정의
const math =  {
	multiply :  function(x, y) {
		return x * y;
	},
	divide : function(x, y) {
		return x / y;
	},
	square : function(x){
		return x * x;
	}
};
// 위의 함수를 짧게 바꾸면
const sortMath =  {
	multiply(x, y) {
		return x * y;
	},
	divide(x, y) {
		return x / y;
	},
	square(x){
		return x * x;
	}
};

// 221. this라는 불가사의한 키워드
const person = {
	first: 'hi',
	last: 'bye',
	fullName(){
		return `${this.first} ${this.last}`
	}
}
person.fullName(); // 'hi bye'
person.last = 'hello';
person.fullName(); //'hi hello'

const cat = {
	name : 'blue steele',
	color : 'grey',
	breed : 'scottish fold',
	meow(){
		console.log(`${this.name} says Meowwww`);
	}
} 
cat.meow() //blue steele says Meowwww

// 222. try / catch 사용하기
function string(msg){
	try{
		console.log(msg.toUpperCase().repeat(3));
	}catch(e){
		console.log(e);
		console.log("한글을 입력하세요!");
	}
}