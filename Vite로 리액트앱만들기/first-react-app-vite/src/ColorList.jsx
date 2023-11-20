// export default function ColorList({colors}){
// 	const lis = colors.map((color) =><li>{color}</li>);
// 	return(
// 		<div>
// 			<p>Color List</p>
// 			<ul>{lis }</ul>
// 		</div>
// 	);
// }

// 이번엔 훨씬 더 많이 쓰이는 방법은 인라인으로 바로 사용하는 방법이다 👇
export default function ColorList({colors}){
	return(
		<div>
			<h2>Color List</h2>
			<ul>{ colors.map((colorName) => (
			<li style={{color : colorName}}>{colorName}</li>))}
			{/* 여기서 color는 스타일에 설정하는 속성 이름이며
			colorName는 배열 색상의 실제 이름이다(즉 map을 돌면서 각 요소의 이름) */}
			</ul>
		</div>
	);
}