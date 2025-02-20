import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getPizzaTotalPrize } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
   const [withPriority, setWithPriority] = useState(false);
    const cart=useSelector(getCart);
    const totalPrice=useSelector(getPizzaTotalPrize);
    const priorityPrice=withPriority ? (totalPrice * (0.2)):0;
    const totalPizzaPrice=totalPrice+priorityPrice;
  //  const cart=fakeCart;
  // console.log(cart,'cart')
  const username= useSelector(state=>state.user.name)
  

  return (
    <div>
      <h2 className="text-xl font-semibold my-8">Ready to order? Let's go!</h2>

      <Form method="POST" >
        <div className="mb-5 flex flex-col justify-start gap-2 sm:flex-row px-4 ">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
          <input className="input w-full" value={username} type="text" name="customer" required />
          </div>
        </div>

        <div className="mb-5 flex flex-col justify-start gap-2 sm:flex-row px-4 ">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
        </div>

        <div className="mb-5 flex flex-col justify-start gap-2 sm:flex-row px-4">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input w-full" type="text" name="address" required />
          </div>
        </div>

        <div className="flex gap-3 items-center mb-6">
          <input className="h-7 w-7 accent-yellow-500"
            type="checkbox"
            name="priority"
            id="priority"
             value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)}/>
        </div>

        <div className="mb-5">
          <Button type='big'>ORDER NOW FROM ${totalPizzaPrice} </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request})
{
const formData=await request.formData();
const data=Object.fromEntries(formData);
console.log(data);

const order={
  ...data,
  cart:JSON.parse(data.cart),
  priority: data.priority ==='true'
}
console.log(order,'new order');
const newOrder=await createOrder(order);

store.dispatch(clearCart());

//redirect is a function provided by react router ,because we cannot use navigation hook inside a fn
return redirect(`/order/${newOrder.id}`);

}

export default CreateOrder;
