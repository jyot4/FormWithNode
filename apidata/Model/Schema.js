import mongoose from "mongoose";
const schema = new mongoose.Schema({
    id: {
        type: "String",
        require: true
    },
    category: {
        type: "String",
        require: true
    },
    dec: {
        type: "String",
        require: true
    },
    image: {
        type: "String",
        require: true
    },





})

const foodData = mongoose.model('fooddata', schema)
export default foodData