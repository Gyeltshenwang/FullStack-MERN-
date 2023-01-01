import express from "express";
import { getUser,postUserDetails} from '../controllers/userController.js'
const router = express.Router();

router.get('/', getUser);
router.post('/register', postUserDetails);







export default router;