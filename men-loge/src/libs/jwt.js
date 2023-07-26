import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config";

export function createTokenAccess (payload){
    return new Promisse ((resolve,reject ) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "id"
            },
            (err,token) => {
                if (err) reject (err);
                resolve (token)
            }
        );
    })
}