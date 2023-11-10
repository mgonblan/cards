/**
 * db.js
 * @description :: exports database connection using mongoose
 */

const mongoose = require('mongoose');
const uri = process.env.NODE_ENV === 'test' ? process.env.DB_TEST_URL : process.env.DB_URL;
mongoose.connect(uri);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to database'));

module.exports = mongoose;
