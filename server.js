import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;
const VERSION = process.env.VERSION || 'version2';

app.get('/' , (_,res)=>{
    throw new Error("Someone is inside my home , help");
})

app.get('/version' , (req,res)=>{
    res.json( {version : `You are currently running on ${VERSION}`});
} )

app.get('/health' , (req,res)=>{
    res.status(200).json({ok : true , service :'deployement-demo'})
})

app.listen(PORT , () =>{
    console.log(`Running at ${PORT}`);
})
