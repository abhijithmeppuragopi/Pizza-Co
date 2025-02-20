import { useSelector } from "react-redux"

export default  function Username(){
   const name= useSelector(state=>state.user.name)
    return <div className="text-sm font-semibold hidden md:block">
        {name}
    </div>

}