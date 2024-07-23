import Button from "./UI/Button";
import Input from "./UI/Input";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const SearchItem=()=>{
    return(
        <>
        
        <div className="flex my-3  m-auto justify-center ">
        {/* <Input type="dropdown"  className="bg-gray"/> */}
        <Input type="name" placeholder="Enter item" className="bg-gray-200 outline-none p-2 text-black" />
        <Input type="name" placeholder="Enter your location" className="bg-gray-200 outline-none text-black"/>
        <Button  buttonTitle={  <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass}  />} buttonClasses="bg-blue-500  p-2"  />
      



        </div>
        </>
    )
}


export default SearchItem;