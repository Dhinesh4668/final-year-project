require('dotenv').config();
const { default: mongoose } = require('mongoose');


const DataBase = () =>{
    mongoose.connect(process.env.DATABASE_URL);
    const databse = mongoose.connection;

    databse.on('error', err => console.error(err));
    databse.on('open', ()=> console.log("database connected...."))
}

module.exports = DataBase;