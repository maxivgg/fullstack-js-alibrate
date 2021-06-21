import { Router } from 'express';
var router = Router();
import * as userController from '../controllers/users.controller.js';
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUserById);
router.delete('/:userId', userController.deleteUserById);
export default router;