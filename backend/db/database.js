import mysql from 'mysql2'
import { config } from 'dotenv';
config();

const data = {
    host:process.env.HOST ,
    user : process.env.USER,
    password : process.env.PASSWORD ,
    database : process.env.DATABASE
}

export const connection = mysql.createConnection(data);

const connectToDatabase = () =>{
    connection.connect((err)=>{
        if(err)
            console.log(err)
        else
            console.log('Database connection Successful')
    })
}

export default connectToDatabase;