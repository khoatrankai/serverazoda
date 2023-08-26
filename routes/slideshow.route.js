import express from 'express'
import {createSlideshow,getList,deleteId,updateId,getId} from '../controllers/slideshow.controller.js'
const route = express.Router()

route.post('/create',createSlideshow);
route.get('/list',getList);
route.delete('/delete/:id',deleteId);
route.put('/update/:id',updateId);
route.get('/list/:id',getId)


export default route
