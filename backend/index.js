require('dotenv').config()

const oracledb = require('oracledb');

const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;
const server = process.env.DBSERVER;

async function run(sql) {

  let connection;

  try {
	oracledb.initOracleClient({libDir: 'C:\\Program Files\\Java\\instantclient_21_3'});
    connection = await oracledb.getConnection(
	{ user: username, 
	password: password, 
	connectionString: server });

    console.log("Successfully connected to Oracle Database");
	let result = await connection.execute(
      sql
	);	
	console.log(result);
  }
  catch (e)
  {
	  console.error(e);
  }
  finally
  {
	  if(connection)
	  {
		  try
		  {
			  await connection.close();
		  }
		  catch (e)
		  {
			  console.error(e);
		  }
	  }
  }
}
var s = 'select * from response_meaning'
run(s);