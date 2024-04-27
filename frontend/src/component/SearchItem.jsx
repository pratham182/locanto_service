import Input from "./UI/Input";
const SearchItem=()=>{
    return(
        <>
        
        <div className="flex my-3  m-auto w-3/4">
        <Input type="dropdown"  className="bg-gray-200"/>
        <Input type="name" placeholder="Enter item" className="bg-gray-200 outline-none"/>
        <Input type="name" placeholder="Enter your location" className="bg-gray-200 outline-none"/>

        </div>
        </>
    )
}


export default SearchItem;