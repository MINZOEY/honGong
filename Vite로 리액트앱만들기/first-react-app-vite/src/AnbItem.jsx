export default function AnbItem({name, price, rating, id}){
	return(
		<div style={{border: '1px solid gray', borderRadius: '15px'}}>
			<h2>{name}</h2>
			<h3>${price} a night</h3>
			<h4>⭐️{rating}</h4>
		</div>
	)
} 