const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const schema=mongoose.Schema({
	title: {type:String, default:null, required:true},
	description: {type:String, default:null, required:true},
	category: {type:String, default:null, required:true},
	image:String,
	details: {type:String, default:""},
	store:String,
	deliveryCharge:{ type: Number, default: 0 },
	sold:{ type: Number, default: 0 },//to store how much times the product is sold
	seller:String,
	moq: {type:Number, default:null, required:true},
	brand:String,
	stock:{type:Number, default:0, required:true},
	price:{type:Number, default:0, required:true},
	slashedPrice:{type:Number, default:0, required:true},
	measuringUnit:String
},{ timestamps: true});

module.exports=mongoose.model("Product", schema);