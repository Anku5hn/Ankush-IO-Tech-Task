import  express  from "express";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import ConnectDB from './config/ConnectDB.js';
import {CreateRoute} from './routes/CreateRoute.js'
import {ReadRoute} from './routes/ReadRoute.js'
import {UpdateRoute} from './routes/UpdateRoute.js';
import {DeleteRoute} from './routes/DeleteRoute.js'
import path from 'path';
import {dirname} from 'path'
import {fileURLToPath} from 'url'
dotenv.config();
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors()); 
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/create', CreateRoute);//endpoint for creating
app.use('/api/v1/read', ReadRoute);//endpoint for reading
app.use('/api/v1/update',UpdateRoute);//endpoint for updating
app.use('/api/v1/delete', DeleteRoute);//endpoint for deleting
app.use(express.static(path.join(__dirname,'./client/dist')));
const PORT = process.env.PORT || 8080;
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/index.html'));
})
ConnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})