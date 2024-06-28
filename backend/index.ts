import express, { Application } from 'express';
import authRoute from './routes/auth';
import  dotenv from 'dotenv';
import bodyParser from 'body-parser';
const app: Application = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/",authRoute);
app.listen(5000,()=>{
    console.log("App is running on port 5000");
})


