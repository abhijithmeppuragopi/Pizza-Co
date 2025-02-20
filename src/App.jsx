import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, {loader as menuloader} from "./features/menu/Menu";
import CreateOrder,{action as actionCreator} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import Order, {loader as orderloader} from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
// import OrderItem from "./features/order/OrderItem";

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'/menu',
      element:<Menu/>,
      errorElement:<Error/>,
      loader:menuloader
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
    path:'/order/new',
    element:<CreateOrder/>,
    action:actionCreator
  },
  {
    path:'/order/:orderid',
    element:<Order/>,
    loader:orderloader,
    errorElement:<Error/>,
  }]
  }
  
])
function App() {
  return <RouterProvider router={router}/>
}
export default App
