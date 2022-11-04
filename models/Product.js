const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const schema=mongoose.Schema({
	title: String,
	description:String,
	category:String,
	image:String,
	details:String,
	store:String,
	deliveryCharge:{ type: Number, default: 0 },
	sold:{ type: Number, default: 0 },//to store how much times the product is sold
	seller:String,
	moq:Number,
	brand:String,
	stock:Number,
	price:Number,
	slashedPrice:Number,
	measuringUnit:String
},{ timestamps: true});

module.exports=mongoose.model("Product", schema);