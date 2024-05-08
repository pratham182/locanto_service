import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Link, useNavigate } from "react-router-dom";


//understand it 
const SignIn=()=>{
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  })


  const inputChangeHandler = React.useCallback((e) => {
    const { name, value } = e.target;
   console.log(name,value)
    setInputData(prevData => ({
      ...prevData, [name]: value
    }))
  });


  const navigate = useNavigate()
    return(
        <>
        
<div className="sm:mx-auto w-20 sm:w-full sm:max-w-sm">
 
 </div><div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
   <div class="sm:mx-auto sm:w-full sm:max-w-sm">
     
     <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
   </div>
 
   <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <form class="space-y-6" action="#" method="POST">
       <div>
         <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
         <div class="mt-2">

          <Input type="email" onChange={inputChangeHandler} name="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 pl-2"/>
 
         </div>
       </div>
 
       <div>
         <div class="flex items-center justify-between">
           <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
           <div class="text-sm">
             <a href="#" class="font-semibold text-blue-600 hover:text-blue-500">Forgot password?</a>
           </div>
         </div>
         <div class="mt-2">
          <Input id="password" onChange={inputChangeHandler} name="password" autocomplete="current-password" className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 " />

         </div>
       </div>
 
       <div>
        <Button buttonTitle="SignIn" type="submit" buttonClasses="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"/>
        
       </div>
     </form>
 
     <p class="mt-10 text-center text-sm text-gray-500">
       Not a member?
       
       <Link to="/" className="font-semibold leading-6 text-blue-600 hover:text-blue-500"  >SignUp
       </Link>
     </p>
   </div>
 </div>
        </>
      
    )
}

export default SignIn;