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
