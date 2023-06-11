import bcrypt from "bcrypt";

export function hashpass(rawPassword) {
    return bcrypt.hash(rawPassword, 10).then((hash) => {
        return hash
    })
}

export function checkPass(rawPassword, hashedPassword) {
    return bcrypt.compare(rawPassword, hashedPassword).then((result) => {
        return result;
    })
}