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

// 225. forEach 메서드
const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function (el){
	console.log(el);
}) //numbers의 요소가 한번씩 콘솔에 찍힌다.

// 위와 같은 결과를 배출한다.
for(let el of numbers){
	console.log(el);
}

// 226. map 메서드
const numbers1 = [1,2,3,4,5,6,7,8,9,10];

const doubles = numbers1.map(function (num){
	return num * 2;
}) //새로운 배열 만들어짐 [2,4,6,8,10,12,14,16,18,20]

// 227. 화살표 함수
const square = x => {
	return x * x;
	// 매개변수가 하나일 때는 소괄호()를 지워도 된다.
}
const sum =  (x, y) => {
	return x + y; 
}

const rollDie = () => {
	return Math.floor(Math.random() * 6) +1 
	//괄호 안을 비우는 이유는, 결정한 인수나 매개변수가 없다 해도 그 자리는 필요함
}

// 228. 화살표 함수의 반환
// 아래 함수들은 같은 결과 값을 나타내는데 표현만 다른 식이다.
// 함수 표현식 정석
const isEven = function(num) {
	return num % 2 === 0;
}
// 화살표 함수의 표현식
const isEven = (num) => {
	return num % 2 === 0;
}
// 화살표 함수 뒤에 매개변수의 소괄호가 생략
const isEven = num => {
	return num % 2 === 0;
}
// 암시적 반환을 사용한 식, 중괄호 대신 소괄호를 사용해서 return 키워드 생략
const isEven = num => (
	num % 2 === 0;
)
// 최종 버전, 암시적 반환을 사용하여 코드를 한줄로 만들었다. 
const isEven = num => num % 2 === 0;

// 230. setTimeout & setInterval
setTimeout(() =>{ console.log("hello")}, 3000)
setInterval(() => {console.log(Math.random())}, 2000)

const id = setInterval(() => {console.log(Math.random())}, 2000)
clearInterval(id)	// clearInterval을 호출해야지 멈춘다.

// 231. filter 메서드
const nums= [1,2,3,4,5,6,7,8,9,10];

nums.filter( n => {
	return n < 7
})	//[1,2,3,4,5,6]

const movies = [
	{
		title: '해리포터 - 마법사의 돌' ,
		score: 90,
		year : 1999
	},
	{
		title: '엽기적인 그녀',
		score: 78,
		year: 2002
	},
	{
		title: '아이언맨3',
		score: 83,
		year: 2018
	},
	{
		title: '가디언즈 오브 갤럭시 - vol.2',
		score: 80,
		year: 2022 
	},
	{
		title: '어벤져스 - 엔드게임',
		score: 98,
		year: 2019
	},
	{
		title: '엘리멘탈',
		score: 88,
		year: 2023
	}
]
//평점 순
const goodMovies = movies.filter(movie => {
	return movie.score > 90
})
// 더 간략하게 구현하면
const goodMovies1 = movies.filter(m => m.score > 80)
const goodTitles = goodMovies1.map(m => m.title)
// 이 두개를 한번에 적용하려면
movies.filter(m => m.score > 90).map(m => m.title);

const bedMovies = movies.filter(movies => {
	return movies.score < 80
})
// 간략하게 구현하면
const bedMovies1 = movies.filter( m => m.score < 80)

// 최신순

const recentMovies = movies.filter( m => m.year > 2000)

// 문제 예시 )
//filter 메서드를 사용하는 연습을 해 보겠습니다. 사용자 이름 배열(문자열)을 받는 validUserNames라는 이름의 함수를 작성하세요. 이 함수는 10자 미만의 사용자 이름만 포함하는 새 배열을 반환해야 합니다.
// 예:
// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]

// 정답
function validUserNames(usernames) {
	return usernames.filter(name => name.length<10)
}
// 또는
function validUserNames(arr) {
	const filteredArr = arr.filter(function (name) {
		return name.length < 10;
	});
	return filteredArr;
}

// 232. Some과 every 메서드
const exams = [80, 93, 90, 84, 79, 96, 88, 77]
exams.every(score => score >= 75) //true
// 그런데 여기서 
const exams1 = [80, 93, 90, 84, 79, 96, 88, 77, 73]
// exams1배열에 73을 넣게 되면 조건을 만족하지 못해서 false가 출력
exams1.every(score => score >= 75) //false

exams.some(score => score >= 75) //true

movies.some(movie => movie.year > 2012)	//true
movies.some(movie => movie.year > 2024)	//false

// 문제 예시
// Some/Every 연습
// 숫자 배열을 단일 인수로 받는 allEvens라는 이름의 함수를 작성하세요. 배열에 포함된 숫자가 모두 짝수인 경우 true를 반환하세요. 그렇지 않으면 false를 반환하세요. 'some' 또는 'every' 메서드를 사용하면 도움이 됩니다. (여기에서 실제로 유용한 것은 둘 중에 하나 뿐입니다.)

// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false

// 정답
function allEvens(arr) {
	return arr.every(function (num) {
    	return num % 2 === 0;
	});
}
const allEvens = function (arr) {
	return arr.every(num => num % 2 === 0);
}


// 233. Reduce 메서드
const prices = [9,99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices){
// 	total += price
// }
// console.log(total);		//111.97
// 위와 동일한 결과 값을 가짐

const total = prices.reduce((total, price) => {
	return total + price
})	//111.97
// 암시적 반환을 사용해서 더 간략하게 줄일 수 있다.
// const total = prices.reduce((total, price) => total + price)	//111.97

const minPrice = prices.reduce((min, price) => {
	// 최대값 찾기
	if(price > min){
		return price;
	}
	return min;
}) //49.99

// 1.50은 더 작은 값을 찾을 때까지 다음 번 min으로 유지됨

const minPrice = prices.reduce((min, price) => {
	// 최솟값 찾기
	if(price < min){
		return price;
	}
	return min;
}) 	//1.5
// price < min이라고 하면
// 새가격인 price를 return처리해 여기서 반환값이 됨
// 다음번 순회 할 때 사용되는 다음번 min이 됨
// 그렇지 않으면 return min도 가능함

// 위에서 사용한 영화배열객체를 사용한다
const highestRated = movies.reduce((bestMovie, currMovie) => {
	// 평점을 봐야하니까 
	if(currMovie.score > bestMovie.score){
		return currMovie;
	}
	return bestMovie;
})	//{title: '어벤져스 - 엔드게임', score: 98, year: 2019}


// 234. 화살표 함수와 'this'


// 236. 기본 매개 변수
function mix(a, b = 1){
	return a * b;
}
mix(4) // 4
mix(4, 5) // 20

function say(msg = 'hey there', person, punc = '!'){
	console.log(`${msg}, ${person} ${punc}`);
}
say('hi', doi)	//hi, doi!
say('zoey')	// zoey, undefiend!  왜? 매개변수의 순서가 맞지 않아서

//그렇다면 어떻게 수정해야하나?!
function say1(person, msg='hey there', punc='!'){
	console.log(`${msg}, ${person}${punc}`)
}
say('park')	// hey there, park!

// 237. 함수 호출 시의 스프레드 구문
let numArr = [2, 3, 756, 34, 234, 54523, 234245, 1, 34, 66]

Math.max(numArr)	// NaN
Math.max(...numArr)	// 234245

