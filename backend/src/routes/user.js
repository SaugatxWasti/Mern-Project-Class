import express from "express";
import UserController from "../controllers/UserController.js";
import FileServiceMiddleware from "../middleware/FIleServiceMiddleware.js";

const userRouter = express.Router();
const uInstance = new UserController();
const up = new FileServiceMiddleware();
const file = up.fileUpload("users");

userRouter.get('/', uInstance.index);
userRouter.post('/',file.single('image'),uInstance.store);
userRouter.get('/:id',uInstance.show);
userRouter.put('/:id',uInstance.update);
userRouter.delete('/:id',uInstance.destroy);


export default userRouter;