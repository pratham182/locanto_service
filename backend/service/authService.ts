import { CreateUserDTO, LoginUser, User } from "../model/user";
import { PrismaClient } from '@prisma/client';
import {   comparePassword, hashPassword } from "../utils/authUtil";

const prisma = new PrismaClient();

export const registerService=async(registerData:CreateUserDTO): Promise<User>=>{
  let {email,username,password}=registerData;
  
   password= await hashPassword(password);
      

     const newuser = await prisma.user.create({
        data: {
          email:email,
          username:username,
          password:password

        },
      })

    
        return newuser;
      
      
}



export const loginService=async(loginData:LoginUser)=>{
  const {email,password}=loginData;
  const loginUser:LoginUser | null=await prisma.user.findFirst({
    where:{
       email
    }
  });

  

  //if found

  if(!loginUser){
    return "No user found";
  }

  //check password 
  const comparePasswordStatus:boolean=comparePassword(loginUser.password,password);
   if(!comparePasswordStatus){
    return "Check your password";
   }else{
      console.log(loginUser);
         return loginUser;

   }



}