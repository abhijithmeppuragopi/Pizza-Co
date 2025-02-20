// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import EmptyCart from "../cart/EmptyCart";

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  const order=useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  console.log(order,'order details')
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  if(cart.length<1) return <EmptyCart/>

  return (
    <div className="px-4 py-5 space-y-6">
      <div className="flex gap-2 justify-between flex-wrap mb-10" >
        <h2 className="text-xl font-bold" >{status}...</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 rounded-full uppercase text-white text-sm px-3 py-2  ">Priority</span>}
          <span className="bg-green-500 rounded-full uppercase text-white text-sm px-3 py-2  ">{status} order</span>
        </div>
      </div>

      <div className="bg-stone-300 px-5 py-5 flex sm:justify-between flex-wrap">
        <p className="text-sm font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className="divide-y divide-stone-300">
        {cart.map((item)=><OrderItem item={item} key={item.pizzaId}/>)}
      </ul>

      <div className="bg-stone-300 px-5 py-5 space-y-2.5 text-sm">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold text-base">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
export async function loader({params}){
  const order= await getOrder(params.orderid);
  console.log(order);
  return order
}

export default Order;
