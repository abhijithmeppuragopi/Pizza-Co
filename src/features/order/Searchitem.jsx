import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Searchitem(){
    const [query,setQuery]=useState('')  ;
    const navigate=useNavigate();
    function handleSubmit(e){
    e.preventDefault();
    if(!query) return;
    navigate(`/order/${query}`);

    }
      return <form onSubmit={handleSubmit}>
        <input className="rounded-full px-3 py-2 placeholder:text-sm bg-yellow-200 w-36 md:w-56 md:focus:w-72
         transition-all duration-300 focus:outline-none" type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search your order..."></input>
    </form>
}