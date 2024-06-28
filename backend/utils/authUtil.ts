import { compareSync, genSaltSync, hashSync } from "bcrypt-ts";


export const hashPassword=(password:string)=>{
    
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);

    return hash;
  
};


export const comparePassword=((hashPassword:string,originalPassword:string):boolean=>{
    return compareSync(originalPassword, hashPassword);
    
 });





