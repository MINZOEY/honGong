export default function Clicker({message, buttonText}){
	const handleClick = () => {
		alert(message);
	}
	return(
		// <button onClick={()=>alert(message)}>{buttonText}
		// </button>
		// 또는 
		<button onClick={handleClick}>{buttonText}
		</button>
	);
}