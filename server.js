import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const app = express();

const PORT    = process.env.PORT    || 8000;
const VERSION = process.env.VERSION || 'version1';

// serve pre-built static assets (html, css, video)
app.use(express.static(join(__dirname, 'public')));

app.get('/', (_, res) => {
    res.sendFile(join(__dirname, 'public', 'whoami.html'));
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
