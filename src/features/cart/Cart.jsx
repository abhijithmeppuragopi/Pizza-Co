import { Link } from 'react-router-dom';
import Backbutton from '../../ui/Backbutton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import MenuItem from '../menu/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const username= useSelector(state=>state.user.name);
  
  const cart = useSelector(getCart);
  console.log(cart);
  const dispatch=useDispatch();

  if(cart.length===0) return <EmptyCart></EmptyCart>

  return (

    <div className='pt-5'>
     <Backbutton to={'/menu'}>Back to Menu</Backbutton>

      <h2 className='py-6 pl-4 text-base '>Your cart, {username}</h2>
    
     <ul className='space-y-2'> {cart.map((item)=> <CartItem item={item} key={item.pizzaId}/>)}
     </ul>

      <div className='flex divide-x-4 mt-8'>
        <Button type='big' to={"/order/new"}>Order pizzas</Button>
        <Button type='clear' onClick={()=>dispatch(clearCart())} >Clear cart</Button>
      </div>
    </div>
  
    

  );
}

export default Cart;
