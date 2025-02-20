import { Link } from "react-router-dom";
import Searchitem from "../features/order/Searchitem";
import Username from "../features/user/Username";

export default function Header(){
    return <div className="font-robeto bg-yellow-500 px-4 py-3 sm:px-6 sm:py-6 border-b-2 flex items-center justify-between">
            <Link className="tracking-[.5rem]" to="/">PIZZA CO</Link>
            <Searchitem/>

            <Username/>
    
        </div>
}