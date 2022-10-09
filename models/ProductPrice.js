const mongoose=require("mongoose");
const schema=mongoose.Schema({
	price:Number,
	image:String,
	title:String, 
	location:String,
	measuringUnit:String
},{ timestamps: true})

module.exports=mongoose.model("ProductPrice",schema);