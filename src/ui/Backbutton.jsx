import { Link, useNavigate } from "react-router-dom";

export default function Backbutton({children,to,onclick}){
    const navigate=useNavigate();
    const classname='text-blue-500 py-2 font-semibold hover:text-blue-600 hover:underline';
    if(to==='-1') return <button className={classname} onClick={() => navigate(-1)}>{children}</button>
    return  <Link className={classname} to={to}>&larr; {children}</Link>
}