const mongoose=require("mongoose");

const schema=mongoose.Schema({
	title:String,
	body:String,
	topic:String
},{ timestamps: true});

module.exports=mongoose.model("Notification", schema);