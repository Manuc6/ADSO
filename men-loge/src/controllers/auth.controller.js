import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createTokenAccess } from '../libs/jwt.js';


export const register = async (req, res) =>{
    const {email,password,username} = req.body;
    try{
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });
        console.log (newUser);
        const userSaved = await newUser.save();
        consttoken =await createTokenAccess({id: userSaved._id});
        res.cookie('token',token);
        res.json({
        status: 'success',
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email
    });



    } catch (error){
        res.status(500).json ({ message: error.mesage});
    }

}
export const login = (req, res) => {
    res.send ('Logueando')
}