import express from 'express'
import mongoose from 'mongoose'
import {join} from 'path'
import web from './routes/web.js'
import connectDB from './db/connect.js'
const app=express()
const port=process.env.PORT||'3000'
const db_url=process.env.db_url||'mongodb://127.0.0.1'
mongoose.set('strictQuery',false)
app.use(express.urlencoded({extended:false}))
app.use('/',express.static(join(process.cwd(),'public')))
app.set('view engine','ejs')
app.use(express.json())



connectDB(db_url)

 app.use('/', web)

app.listen(port,()=>{
    console.log(`server starts at http://localhost:${port}`);
})