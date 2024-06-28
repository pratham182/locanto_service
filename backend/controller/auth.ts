import { Request, Response } from 'express';
import { CreateUserDTO, User } from "../model/user";
import { registerService } from "../service/authService"


export const register=async(req:Request,res:Response)=>{
   try{
      
    const registerData:CreateUserDTO=req.body;

    
    const result=await registerService(registerData); 
    
    



   }catch(err){
   console.log(err);
   res.json(err);   }
}