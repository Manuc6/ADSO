import { Router } from "express";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import { requiredAuth } from "../middleware/tokenValidation.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { createTaskSchema } from "../schema/task.schema.js";

const router = Router();

router.get('/tasks',requiredAuth, getTasks)
router.get('/tasks/:id',requiredAuth, getTask)
router.post('/task',requiredAuth, validateSchema(createTaskSchema), createTask)
router.put('/tasks/:id',requiredAuth, updateTask)
router.delete('/tasks/:id',requiredAuth, deleteTask)

export default router;