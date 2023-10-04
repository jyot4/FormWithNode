import mongoose  from "mongoose";
const schema = new mongoose.Schema({
    idCategory:{
        type: "String",
        require: true
    },
    strCategory:{
        type: "String",
        require: true
    },
    strCategoryDescription:{
        type: "String",
        require: true 
    },
    strCategoryThumb:{
        type: "String",
        require: true  
    },

 



})

   const foodDatas = mongoose.model('foodData', schema)
    export default foodDatas