import Die from "./Die";
import './DieRolls.css';
export default function DieRolls(){
	return (
		<div className="DieRoll">
			<h1>Dice Roll</h1>
			<Die	/>
			<Die	/>
			<Die	/>
		</div>
		
	)
}