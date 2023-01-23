require('dotenv').config()
const mysql = require('mysql2')
const { Router } = require('express');
const router = Router();

const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to My DataBase!')

module.exports = connection;