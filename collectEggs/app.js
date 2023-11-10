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