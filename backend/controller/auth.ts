import { Request, Response } from 'express';
import { CreateUserDTO, LoginUser, User } from "../model/user";
import { loginService, registerService } from "../service/authService"


export const register = async (req: Request, res: Response) => {
   try {
      const registerData: CreateUserDTO = req.body;
      const result = await registerService(registerData);
      
      res.status(201).json({
         message: "User registered successfully",
         data: result
      });
      
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: "Registration failed",
         error: err
      });
   }
}


export const login=async(req: Request, res: Response)=>{

   try{
      const loginData: LoginUser = req.body;

      const result = await loginService(loginData);
      
      res.status(200).json({
         message: "Login successful",
         data: result
      });
   } catch (err) {
      console.log(err);
      res.status(401).json({
         message: "Login failed",
         error: err
      });
   }

}