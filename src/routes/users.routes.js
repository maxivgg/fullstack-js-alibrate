import { Router } from "express";
const router = Router();

import * as userController from "../controllers/users.controller";

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUserById);
router.delete('/:userId', userController.deleteUserById);

export default router;
