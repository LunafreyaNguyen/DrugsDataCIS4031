import express from "express";

import { queryResult } from '../controllers/queryControllers.js'

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
//Understanding HTTP requests (get,put,post) and status codes meaning

//THIS FILE INITIALIZES ROUTES DEFINED in controllers/queryControllers.js 
const router = express.Router();

//Specifies what to do with http://localhost/query/ requests
router.post('/', queryResult);

export default router;