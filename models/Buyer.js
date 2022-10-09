const mongoose=require("mongoose");

const schema=mongoose.Schema({
	organization:String,
	address:String,
	phone:Number,
	fcmToken:String,
	email:String,
	uid:String,
	status:{
		type:String,
		default:"pending"
	},
	_id:String,
	additional_number:Number,
	type:String,
	tin:String,
	name:String,
	contact_person:String,
	level:{
		type:String,
		default:"Level 1"
	}
},{ timestamps: true});

module.exports=mongoose.model("Buyers", schema);