var mongoose  =  require('mongoose');

var csvSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    url:{
        type:String
    }
});

module.exports = mongoose.model('studentsrecords',csvSchema);