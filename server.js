import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;
const VERSION = process.env.VERSION || 'version1';

app.get('/' , (_,res)=>{
    res.send("Hello from our tiny deployment app")
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
