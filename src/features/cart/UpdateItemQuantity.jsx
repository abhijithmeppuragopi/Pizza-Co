import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({pizzaid,quantity}){
    const dispatch=useDispatch();
    return <div className="flex gap-2 items-center">
        <Button type='round' onClick={()=>dispatch(decreaseItemQuantity(pizzaid))}>-</Button>
        <span>{quantity}</span>

        <Button type='round' onClick={()=>dispatch(increaseItemQuantity(pizzaid))}>+</Button>
        
    </div>

}
