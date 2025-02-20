import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loading from "./Loading";
import Searchitem from "../features/order/Searchitem";

export default function AppLayout(){
    const navigation=useNavigation();
    console.log(navigation);
    const isLoading= navigation.state==='loading';
    return <div className="grid grid-rows-[auto_1fr_auto] h-screen">
        <Header/>
        
        {isLoading && <Loading/>}
        
        <div className="" >
        <main className="max-w-3xl mx-auto" >
            <Outlet/>
        </main>
        
        </div>
        <CartOverview/>
    </div>
}
