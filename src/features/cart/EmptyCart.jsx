import { Link } from 'react-router-dom';
import Backbutton from '../../ui/Backbutton';

function EmptyCart() {
  return (
    <div className='mt-10'>
      <Backbutton to={'/menu'}>Go Back</Backbutton>

      <p className='text-xl pt-8 font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
