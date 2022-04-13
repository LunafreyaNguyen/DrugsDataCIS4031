import dotenv from "dotenv";
dotenv.config();
import express from "express";

import oracledb from 'oracledb';

//Getting variables in .env file
const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;
const server = process.env.DBSERVER;
const router = express.Router();

//Getting Connection to Oracle Database
let connection;
try {
	oracledb.initOracleClient({ libDir: 'C:\\Program Files\\Java\\instantclient_21_3' });
	connection = await oracledb.getConnection(
		{
			user: username,
			password: password,
			connectionString: server
		});

	console.log("Successfully connected to Oracle Database");
}
catch (e) {
	console.error(e);
}

//Function to get Query Results from Oracle Database
async function run(sql) {

	try {
		let result = await connection.execute(
			sql
		);
		return result;
	}
	catch (e) {
		console.error(e);
	}
}

//Function that Accepts request and responses
export const queryResult = async (req, res) => {
	try {
		const query = await run(req.body.query);
		console.log(query);
		res.status(200).json({ query: query });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}


export default router;