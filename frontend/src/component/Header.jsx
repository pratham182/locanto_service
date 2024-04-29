import { useState } from "react";
import Button from "./UI/Button"

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faBell,faExpand } from '@fortawesome/free-solid-svg-icons';

const Header=()=>{
  const [userStatus,setUserStatus]=useState(true);
    return(
        <>
        
        <div className="flex bg-blue-500 h-16 justify-between">
          {
            
          }
             <div id="logo" className="flex items-center mx-8">
               Logo
             

             </div>

             <div className="mx-8 flex  items-center gap-5" id="buttons" >

              {
                userStatus==true?(<>
                <Button buttonTitle={ <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />}/>
                <Button buttonTitle={<FontAwesomeIcon className="text-white" icon={faBell} />}/>
                <Button buttonTitle={ <FontAwesomeIcon className="text-white" icon={faExpand} />}  />

                <img className="rounded-[50%] w-8 h-8" src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"/>
                <div>Pratham</div>
                </>):( <>
                <Button buttonTitle="Login" buttonClasses="text-white text-l" />
                <Button buttonTitle="Sign up" buttonClasses="bg-white  text-black  py-0.5 px-3 rounded-[10%] text-l"/>
                </>
                )
              }
            
               
             </div>
        </div>

        
        </>
    )
}

export default Header;