var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { loginService, registerService } from "../service/authService.js";
export const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registerData = req.body;
        const result = yield registerService(registerData);
        res.status(201).json({
            message: "User registered successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Registration failed",
            error: err
        });
    }
});
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginData = req.body;
        const result = yield loginService(loginData);
        res.status(200).json({
            message: "Login successful",
            data: result
        });
    }
    catch (err) {
        console.log(err);
        res.status(401).json({
            message: "Login failed",
            error: err
        });
    }
});
