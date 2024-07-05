export interface User {
    email: string;
    password: string;
    name?: string;
    username:string;
    createdAt: Date;
    updatedAt: Date;
  }
  export interface CreateUserDTO {
    email: string;
    username: string;
    password: string;
  }
  export interface LoginUser {
    email: string;
    password: string;
  }

  




