import { connection } from "../db/database.js";

export const addCards = (req,res)=>{
    const {bank_name,card_type,mpin,pin} = req.body;
    const id = bank_name+card_type;
    const data =[
        [id,bank_name,card_type,mpin,pin]
    ]
    connection.query('insert into card(id,bank_name,card_type,mpin,pin) values ?',[data],(err,result)=>{
        if(err)
            console.log("err "+err);
        else
            res.status(200).json({message:"Ok"})
    })
}
export const fetchCards = async (req,res)=>{
    const [data,field] = await connection.promise().query('select * from card')
    // console.log(data);
    res.json(data);
}

export const updateCards = async(req,res)=>{
    const id = req.params.key;
    connection.query('delete from card where id = ?',[id],(err,result)=>{
        if(err)
            console.log(err);
        else
            res.status(200).json({message:'Ok'})
    })
}
