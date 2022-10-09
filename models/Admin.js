const mongoose=require("mongoose");
const schema=mongoose.Schema({
	name:String,
	email:String,
	password:String,
	_id:String,
	phone:Number,
	access:Object
},{ timestamps: true})
module.exports=mongoose.model("Admin", schema);