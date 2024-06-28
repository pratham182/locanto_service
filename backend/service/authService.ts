import { CreateUserDTO, User } from "../model/user";
import { PrismaClient } from '@prisma/client';
import { hashPassword } from "../utils/authUtil";

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