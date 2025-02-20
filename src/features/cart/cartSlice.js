import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cart:[]
}

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            state.cart.push(action.payload)

        },
        deleteItem(state,action){
            state.cart=state.cart.filter((item)=>
                item.id!==action.payload)

        },
        increaseItemQuantity(state,action){
           const item= state.cart.find((item)=>item.pizzaId===action.payload)
           item.quantity++;
           item.totalPrice=item.quantity * item.unitPrice;
           
        },
        decreaseItemQuantity(state,action){
            const item= state.cart.find((item)=>item.pizzaId===action.payload)
            item.quantity--;
            item.totalPrice=item.quantity * item.unitPrice;
            if(item.quantity===0) cartSlice.caseReducers.deleteItem(state,action);
        },
        clearCart(state){
            state.cart=[]

        }

    }
})
export const getPizzaQuantity=(state)=>state.cart.cart.reduce((sum,item)=>sum+item.quantity,0)
export const getPizzaTotalPrize=(state)=>state.cart.cart.reduce((sum,item)=>sum+item.totalPrice,0)
export const getCart=(state)=>state.cart.cart;
export const getQuantityofEachPizza=id=>((state)=>state.cart.cart.find((item)=>item.pizzaId===id)?.quantity)


export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart} = cartSlice.actions
export default cartSlice.reducer;