const mongoose=require("mongoose");

const schema=mongoose.Schema({
	name: String,
	gender:{
		type:String,
		default:"Male"
	},
	region:String,
	zone:String,
	woreda:String,
	kebele:String,
	password:String,
	phone:Number,
	status:{
		type:String,
		default:"pending"
	},
	_id:String,
	additional_number:Number,
	email:String,
	address:String,
	level:{
		default:"Level 1",
		type:String
	},
	tin:String,
	type:{
		type:String,
		default:"Importer"
	},
	age:Number,
	bookNumber:String,
	distanceDetail:String
},{ timestamps: true});

module.exports=mongoose.model("Sellers", schema);