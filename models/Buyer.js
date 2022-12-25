const mongoose=require("mongoose");

const schema=mongoose.Schema({
	organization:String,
	address:String,
	phone:Number,
	fcmToken:{
		type:String,
		default:""
	},
	email:String,
	shopInner:String,
	dob:String,
	userType:{
		default:"retailer",
		type:String
	},
	sales:String,
	shopOuter:String,
	uid:String,
	gst:String,
	status:{
		type:String,
		default:"pending"
	},
	_id:String,
	additional_number:Number,
	type:String,
	pan:String,
	gender:String,
	name:String,
	contact_person:String,
	level:{
		type:String,
		default:"Level 1"
	}
},{ timestamps: true});

module.exports=mongoose.model("Buyers", schema);