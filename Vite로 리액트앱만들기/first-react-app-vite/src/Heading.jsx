export default function Heading({color = 'olive', text, fontSize}) {
	return(
		<div>
		<h1 style={{color : color, fontSize: fontSize}}>{text}</h1>
		</div>
	);
}