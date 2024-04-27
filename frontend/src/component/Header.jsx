import Button from "./UI/Button"
const Header=()=>{
    return(
        <div className="flex bg-blue-500 h-16 justify-between">
             <div id="logo" className="flex items-center mx-8">
               Logo
             

             </div>

             <div className="mx-8 flex  items-center gap-5" id="buttons" >
             <Button buttonTitle="Login" buttonClasses="text-white text-l" />
                <Button buttonTitle="Sign up" buttonClasses="bg-white  text-black  py-0.5 px-3 rounded-[10%] text-l"/>
               
             </div>
        </div>
    )
}

export default Header;