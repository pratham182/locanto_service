import { compareSync, genSaltSync, hashSync } from "bcrypt-ts";
export const hashPassword = (password) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
};
export const comparePassword = ((hashPassword, originalPassword) => {
    return compareSync(originalPassword, hashPassword);
});
