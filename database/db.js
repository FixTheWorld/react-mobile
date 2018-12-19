const config=require('../config/config');
const mongoose=require('mongoose');
mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`);
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
module.exports=db;