import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getQuantityofEachPizza } from "../cart/cartSlice";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
// import {Menu} from './Menu';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const pizzaQuantity=useSelector(getQuantityofEachPizza(id))
 
  const dispatch=useDispatch();
  function handleSubmit(){
    dispatch(addItem({
     pizzaId: id,
      name,
      quantity:1,
      unitPrice,
      totalPrice:unitPrice*1,
    }))

  }
  const isInCart=pizzaQuantity>0;

  return (
    <li className="flex gap-4 py-2 border-b border-stone-400">
      <img className={`h-32 ${soldOut && 'opacity-70 grayscale'}`} src={imageUrl} alt={name} />
      <div className="flex flex-col grow" >
        <p className="font-medium pb-2 pt-2">{name}</p>
        <p className="italic text-sm">{ingredients.join(', ')}</p>
        <div className="text-sm mt-auto flex items-center">
          
          
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="text-stone-600">Sold out</p>}
          <div className="ml-auto flex gap-8">
           {isInCart&& <UpdateItemQuantity pizzaid={id} quantity={pizzaQuantity}/>} 

          {isInCart && <DeleteItem pizzaId={id}>Delete</DeleteItem> } 
          {!soldOut && !isInCart && <Button type='small' onClick={handleSubmit}>Add to cart</Button>}
      </div>
      
          

        </div>
        
      </div>
      
    </li>
  );
}

export default MenuItem;
