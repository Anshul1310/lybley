const mongoose=require("mongoose");

const schema=mongoose.Schema({
	image:String,
	name:String
},{ timestamps: true});

module.exports=mongoose.model("Category", schema);
