import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

// let result = await pool.query("USE test");
// result = await pool.query("CREATE TABLE users (username varchar(255), password varchar(255))");
export async function runQuery(query){
    var result = await pool.query(query);
    console.log(result[0]);
    return result[0];
}
console.log(await runQuery(`SELECT quizcode from quizzes`));