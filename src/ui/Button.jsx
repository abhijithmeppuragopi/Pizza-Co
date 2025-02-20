import { Link } from "react-router-dom";

export default function Button({children,to,type,onClick}){
    const base=" text-sm inline-block rounded-full tracking-widest font-semibold transition-colors duration-300 uppercase focus-outline-none focus:ring focus:ring-offset-2 "
    const mode={
        small:base+' bg-yellow-400 px-3 py-2 text-xs hover:bg-yellow-500 focus:ring-yellow-500 ',
        big:base+' bg-yellow-400 px-5 py-4 hover:bg-yellow-500  ',
        clear: base+ ' bg-stone-300 px-5 py-4 hover:bg-stone-400 focus:ring-stone-400 border-2 ',
        round:base+' bg-yellow-400 px-2 py-1 md:px-2.5 md:py-2'
    }
    if(to) return <Link className={mode[type]} to={to}>{children}</Link>
    if(onClick) return <div>
    <button onClick={onClick} className={mode[type]}>{children}</button>
</div>

    return <div>
        <button className={mode[type]}>{children}</button>
    </div>
}