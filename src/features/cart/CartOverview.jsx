import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPizzaQuantity, getPizzaTotalPrize } from "./cartSlice";

function CartOverview() {
  const totalPizza=useSelector(getPizzaQuantity);
  const totalPrice=useSelector(getPizzaTotalPrize);
  if(totalPizza===0) return null;

  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-4 sm:px-6 sm:py-6 text-sm md:text-base 
    flex items-center justify-between" >
      <p className="space-x-4">
        <span className="uppercase" >{totalPizza} pizzas</span>
        <span>${totalPrice}</span>
        </p>
      {/* <Link to=<Cartitem/>Open cart &rarr;><Link/> */}
      <Link className="text-semibold" to='/cart'>OPEN CART</Link>
     
    </div>
  );
}

export default CartOverview;
