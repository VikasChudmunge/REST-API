// const mongoose = require("mongoose") ;

// try{
//     mongoose.connect('mongodb://127.0.0.1:27017/DbCRUD');
// }catch(e){
//     console.log('Connection Error', e);
// } 



const mongoose = require('mongoose');

try{
    mongoose.connect('mongodb://127.0.0.1:27017/OsumareDB');
    console.log("Connection Successful");
}catch(e){
    console.log("Connection ERROR", e);
}