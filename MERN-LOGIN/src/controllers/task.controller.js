import Task from '../models/task.model.js';

export const getTasks= async (req,res)=>{
    const tasks=await Task.find({
        user: req.user.id
    }).populate('user') //populate para que me muestre toda la informaciòn 
    res.json(tasks);
}

export const getTask= async (req,res)=>{
    const  task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({message:'Task not Found'});
    res.status(200).json(task)
}

export const createTask= async (req,res)=>{
    const {title,description,date}=req.body;
    const newTask = new Task ({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
}

export const updateTask= async (req,res)=>{
    const  task = await Task.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    });
    if (!task) return res.status(404).json({message:'Task not Found'});
    res.status(201).json(task)
}

export const deleteTask= async (req,res)=>{
    const  task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({message:'Task not Found'});//Si la tarea no existe envia un mensaje y si si existe me devulve un 204(nada)
    return res.status(204); //No necesito que me devuelva la tarea, se agrega el return ya que no tiene el json
};

//creando funciones en el controlador para el funcionamiento de los enpoint