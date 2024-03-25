import express from 'express'
import connectToDatabase from './db/database.js'
import { config } from 'dotenv';
import card from './card.js';
import {addCards,fetchCards,updateCards} from './controller/card.controller.js';
config();

const app = express();
connectToDatabase()
app.use(express.json());

app.get('/get',(req,res)=>{
    res.send("Hello")
})
app.get('/fetch',fetchCards);
app.delete('/update/:key',updateCards);
app.post('/addCard',addCards);
app.listen(process.env.PORT,()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})