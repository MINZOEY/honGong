function Greeter({person = 'everyone', from= 'anonymous'}){
	// console.log(person);
	return(
		<>
			<h1>hi there, {person}!!! </h1>
			<h2>-{from}</h2>
		</>
	
	)
}
export default Greeter;

//  받아오는 props를 구조 분해 한다면
// function Greeter({person}){
// 	console.log(person);
// 	return(
// 	<h1>hi there, {person}!!! </h1>
// 	)
// }
// export default Greeter;