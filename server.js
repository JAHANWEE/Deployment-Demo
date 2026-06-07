import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;
const VERSION = process.env.VERSION || 'version1';

app.get('/' , (_,res)=>{
    res.send("Hello from our tiny deployment app from v4.2")
})

app.get('/whoami' , (_,res)=>{
    res.send(`Hey peeps,
        Welcome to my mini deployment website.
        i am a developer who is just trying to get a hang of things.
        So be nice to me , my dog also says "hi" `)
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
