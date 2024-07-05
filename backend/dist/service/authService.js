var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from '@prisma/client';
import { comparePassword, hashPassword } from "../utils/authUtil.js";
const prisma = new PrismaClient();
export const registerService = (registerData) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, username, password } = registerData;
    password = yield hashPassword(password);
    const newuser = yield prisma.user.create({
        data: {
            email: email,
            username: username,
            password: password
        },
    });
    return newuser;
});
export const loginService = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = loginData;
    const loginUser = yield prisma.user.findFirst({
        where: {
            email
        }
    });
    //if found
    if (!loginUser) {
        return "No user found";
    }
    //check password 
    const comparePasswordStatus = comparePassword(loginUser.password, password);
    if (!comparePasswordStatus) {
        return "Check your password";
    }
    else {
        console.log(loginUser);
        return loginUser;
    }
});
