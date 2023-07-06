import express from 'express'
import studentcontroller from '../controller/studentcontroller.js'
const router=express.Router();

router.get('/', studentcontroller.getdata);
 router.post('/',studentcontroller.createDoc);
 router.get('/update',studentcontroller.updatedata)
 router.get('/update/:id', studentcontroller.updatedoc);
 router.post('/delete/:id',studentcontroller.deletedoc);
 
export default router