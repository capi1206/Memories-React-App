import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://capi1206:1%40Holywars@cluster0.wpt1f.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true})
        .then(()=>app.listen(PORT, ()=> console.log('listening on '+ PORT)))
        .catch((err)=>console.log(err.message));

mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})       