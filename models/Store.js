const mongoose=require("mongoose");
const schema=mongoose.Schema({
	name:String, 
	landmark:String,
	location:String,
	capacity:String
},{ timestamps: true})
module.exports=mongoose.model("Store",schema);