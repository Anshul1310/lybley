const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const schema=mongoose.Schema({
	buyer:{
		type:String
	},
	seller:{
		type:String
	},
	note:String,
	location:{
		type:String
	},
	phone:String,
	items:{ type : Array , default : [{
		seller:String, 
		measuringUnit:String,
		quantity:String, 
		price:String,
		title:String,
		image:String
	}] },
	totalPrice:Number,
	serviceFee:Number,
	status:String,
	address:String,
	paymentType:String,
	orderId:String,
},{ timestamps: true});
module.exports=mongoose.model("Order",schema);