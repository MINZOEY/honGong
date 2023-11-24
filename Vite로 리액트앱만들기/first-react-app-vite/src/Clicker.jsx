export default function Clicker({message, buttonText}){
	const handleClick = () => {
		alert(message);
	}
	return(
		// <button onClick={()=>alert(message)}>{buttonText}
		// </button>
		// 또는 변수로 만들어서.
		<button onClick={handleClick}>{buttonText}
		</button>
	);
}