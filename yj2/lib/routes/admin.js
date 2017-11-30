import express from 'express'
import User from '../controller/user'
const router = express.Router()

router.get('/login', User.login);
router.get('/', User.index);
// router.get('/singout', Admin.singout);
// router.get('/all', Admin.getAllAdmin);
// router.get('/count', Admin.getAdminCount);
// router.get('/info', Admin.getAdminInfo);
// router.post('/update/avatar/:admin_id', Admin.updateAvatar);

export default router