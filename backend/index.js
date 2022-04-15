import dotenv from "dotenv";
dotenv.config();

//express is a framework for server side logic
import express from "express";
//bodyParser parses data sent from a request. Native Javascript doesn't do this
import bodyParser from 'body-parser';
//Cors restricts/handles http request
import cors from 'cors';
import query from './routes/queryRoutes.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/query', query);

//Test Http Request function
app.get("/", (req, res) =>
{
    console.log("Hi");
    res.send({title: 'OKAY'});

})


//Getting the server to run
const PORT = process.env.PORT || 6969;
app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));











