
function ShoppingListItem({item, quantity, completed }){
	const style = {
		color: completed ? 'gray' : 'blue', textDecoration: completed ? 'line-through' : 'none'
	 };

	return(
		<li style={style}>
			{item} - {quantity}
		</li>
	);
}

export default ShoppingListItem;

// {items.map( i => 
// 	<li key={i.id}
// 	style = {{color: i.completed ? 'gray' : 'blue', textDecoration: i.completed ? 'line-through' : 'none'}}>
// 		{i.item} - {i.quantity}
// 	</li>)}