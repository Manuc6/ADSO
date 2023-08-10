import { Router } from "express";
import { register, login, logout, profile} from "../controllers/auth.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { resgisterSchema, loginSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";

const router = new Router();

router.post('/register', validateSchema(resgisterSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', requiredAuth, profile);


export default router;