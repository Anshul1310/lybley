const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const schema=mongoose.Schema({
	name:String, 
    phone:String,
    city:String,
    buyer:String,
    type:String
},{ timestamps: true});
module.exports=mongoose.model("Sell",schema);