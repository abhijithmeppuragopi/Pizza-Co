import Button from "../../ui/Button";
import DeleteItem from "../../ui/DeleteItem";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  console.log(pizzaId,'im id')

  return (
    <li className="pl-4 pb-3 flex sm:align-center sm:justify-between">
      <p className="text-lg">
        {quantity}&times; {name}
      </p>
      <div className="flex align-center gap-4">
        <UpdateItemQuantity pizzaid={pizzaId} quantity={quantity}/>
        <p className="text-sm pt-1.5">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId}>Delete</DeleteItem>
      </div>
      
    </li>
  );
}

export default CartItem;
