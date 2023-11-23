import ShoppingListItem from "./ShoppingListItem";
function ShoppingList({items}){
	return(
		<>
		<ul>
			{items.map( (i)=> (
				<ShoppingListItem	
					id={i.id}
					item={i.item} 
					quantity={i.quantity} 
					completed={i.completed} 	
				/>
				// 아래 방식도 같다 . 같은 프로퍼티를 순서대로 받는다고 했을 경우!
				// <ShoppingListItem	
				// 	key = {i.id}
				// 	{...i}
				// />
			))}
		</ul>
		</>
	);
}

export default ShoppingList;