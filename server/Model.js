import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type: 'String',
        require : true
    },

    password:{
        type : "String",
        require : true
    }
})


export default  schema;